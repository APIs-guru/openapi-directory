package shared



type UploadMetadata struct {
    HeadersToInclude map[string]string `json:"HeadersToInclude,omitempty"`
    URL *string `json:"Url,omitempty"`
    URLExpiry *string `json:"UrlExpiry,omitempty"`
    
}

