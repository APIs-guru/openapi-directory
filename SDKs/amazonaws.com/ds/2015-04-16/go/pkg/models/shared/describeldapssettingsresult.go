package shared

type DescribeLdapsSettingsResult struct {
	LdapsSettingsInfo []LdapsSettingInfo `json:"LDAPSSettingsInfo"`
	NextToken         *string            `json:"NextToken"`
}
