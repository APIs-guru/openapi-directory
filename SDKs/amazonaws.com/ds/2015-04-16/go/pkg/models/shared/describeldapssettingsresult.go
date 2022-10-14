package shared

type DescribeLdapsSettingsResult struct {
	LdapsSettingsInfo []LdapsSettingInfo `json:"LDAPSSettingsInfo,omitempty"`
	NextToken         *string            `json:"NextToken,omitempty"`
}
