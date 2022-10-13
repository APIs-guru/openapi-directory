package shared

type GetUserResponse struct {
	MfaOptions          []MfaOptionType `json:"MFAOptions"`
	PreferredMfaSetting *string         `json:"PreferredMfaSetting"`
	UserAttributes      []AttributeType `json:"UserAttributes"`
	UserMfaSettingList  []string        `json:"UserMFASettingList"`
	Username            string          `json:"Username"`
}
