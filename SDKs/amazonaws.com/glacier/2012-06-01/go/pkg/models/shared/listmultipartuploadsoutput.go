package shared

// ListMultipartUploadsOutput
// Contains the Amazon S3 Glacier response to your request.
type ListMultipartUploadsOutput struct {
	Marker      *string             `json:"Marker,omitempty"`
	UploadsList []UploadListElement `json:"UploadsList,omitempty"`
}
