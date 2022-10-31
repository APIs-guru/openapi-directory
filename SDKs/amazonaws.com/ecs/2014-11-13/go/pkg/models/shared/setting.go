package shared

type Setting struct {
	Name         *SettingNameEnum `json:"name,omitempty"`
	PrincipalArn *string          `json:"principalArn,omitempty"`
	Value        *string          `json:"value,omitempty"`
}
