package shared

type EnableLdapsRequest struct {
	DirectoryID string        `json:"DirectoryId"`
	Type        LdapsTypeEnum `json:"Type"`
}
