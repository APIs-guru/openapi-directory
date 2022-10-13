package shared

type DescribeClientAuthenticationSettingsResult struct {
	ClientAuthenticationSettingsInfo []ClientAuthenticationSettingInfo `json:"ClientAuthenticationSettingsInfo"`
	NextToken                        *string                           `json:"NextToken"`
}
