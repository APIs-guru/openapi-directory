package shared

// UploadMetadata
// Fields to be used while uploading the attachment.
type UploadMetadata struct {
	HeadersToInclude map[string]string `json:"HeadersToInclude,omitempty"`
	URL              *string           `json:"Url,omitempty"`
	URLExpiry        *string           `json:"UrlExpiry,omitempty"`
}
