package shared

// Setting
// The current account setting for a resource.
type Setting struct {
	Name         *SettingNameEnum `json:"name,omitempty"`
	PrincipalArn *string          `json:"principalArn,omitempty"`
	Value        *string          `json:"value,omitempty"`
}
