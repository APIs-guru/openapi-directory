package shared

// GetUserResponse
// Represents the response from the server from the request to get information about the user.
type GetUserResponse struct {
	MfaOptions          []MfaOptionType `json:"MFAOptions,omitempty"`
	PreferredMfaSetting *string         `json:"PreferredMfaSetting,omitempty"`
	UserAttributes      []AttributeType `json:"UserAttributes"`
	UserMfaSettingList  []string        `json:"UserMFASettingList,omitempty"`
	Username            string          `json:"Username"`
}
