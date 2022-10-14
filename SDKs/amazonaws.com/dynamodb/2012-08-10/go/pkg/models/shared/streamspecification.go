package shared

type StreamSpecification struct {
	StreamEnabled  bool                `json:"StreamEnabled"`
	StreamViewType *StreamViewTypeEnum `json:"StreamViewType,omitempty"`
}
