package shared

type GetUserResponse struct {
	MfaOptions          []MfaOptionType `json:"MFAOptions,omitempty"`
	PreferredMfaSetting *string         `json:"PreferredMfaSetting,omitempty"`
	UserAttributes      []AttributeType `json:"UserAttributes"`
	UserMfaSettingList  []string        `json:"UserMFASettingList,omitempty"`
	Username            string          `json:"Username"`
}
