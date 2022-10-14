package shared

type DescribeClientAuthenticationSettingsRequest struct {
	DirectoryID string                        `json:"DirectoryId"`
	Limit       *int64                        `json:"Limit,omitempty"`
	NextToken   *string                       `json:"NextToken,omitempty"`
	Type        *ClientAuthenticationTypeEnum `json:"Type,omitempty"`
}
