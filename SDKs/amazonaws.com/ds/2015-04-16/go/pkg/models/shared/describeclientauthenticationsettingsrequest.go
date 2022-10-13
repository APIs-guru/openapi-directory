package shared

type DescribeClientAuthenticationSettingsRequest struct {
	DirectoryID string                        `json:"DirectoryId"`
	Limit       *int64                        `json:"Limit"`
	NextToken   *string                       `json:"NextToken"`
	Type        *ClientAuthenticationTypeEnum `json:"Type"`
}
