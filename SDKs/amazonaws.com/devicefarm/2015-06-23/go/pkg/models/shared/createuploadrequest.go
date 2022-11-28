package shared

// CreateUploadRequest
// Represents a request to the create upload operation.
type CreateUploadRequest struct {
	ContentType *string        `json:"contentType,omitempty"`
	Name        string         `json:"name"`
	ProjectArn  string         `json:"projectArn"`
	Type        UploadTypeEnum `json:"type"`
}
