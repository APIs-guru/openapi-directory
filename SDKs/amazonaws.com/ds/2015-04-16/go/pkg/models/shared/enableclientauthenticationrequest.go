package shared

type EnableClientAuthenticationRequest struct {
	DirectoryID string                       `json:"DirectoryId"`
	Type        ClientAuthenticationTypeEnum `json:"Type"`
}
