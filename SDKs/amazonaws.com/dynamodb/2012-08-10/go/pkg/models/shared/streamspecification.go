package shared

// StreamSpecification
// Represents the DynamoDB Streams configuration for a table in DynamoDB.
type StreamSpecification struct {
	StreamEnabled  bool                `json:"StreamEnabled"`
	StreamViewType *StreamViewTypeEnum `json:"StreamViewType,omitempty"`
}
