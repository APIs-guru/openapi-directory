package shared

type DescribeLdapsSettingsRequest struct {
	DirectoryID string         `json:"DirectoryId"`
	Limit       *int64         `json:"Limit"`
	NextToken   *string        `json:"NextToken"`
	Type        *LdapsTypeEnum `json:"Type"`
}
