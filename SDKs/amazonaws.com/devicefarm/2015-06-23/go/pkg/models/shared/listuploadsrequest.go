package shared

// ListUploadsRequest
// Represents a request to the list uploads operation.
type ListUploadsRequest struct {
	Arn       string          `json:"arn"`
	NextToken *string         `json:"nextToken,omitempty"`
	Type      *UploadTypeEnum `json:"type,omitempty"`
}
