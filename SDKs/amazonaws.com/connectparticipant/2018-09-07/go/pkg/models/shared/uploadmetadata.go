package shared

type UploadMetadata struct {
	HeadersToInclude map[string]string `json:"HeadersToInclude"`
	URL              *string           `json:"Url"`
	URLExpiry        *string           `json:"UrlExpiry"`
}
