package shared



type DescribeClientAuthenticationSettingsResult struct {
    ClientAuthenticationSettingsInfo []ClientAuthenticationSettingInfo `json:"ClientAuthenticationSettingsInfo,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

