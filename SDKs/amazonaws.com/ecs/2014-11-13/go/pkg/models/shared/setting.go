package shared

type Setting struct {
	Name         *SettingNameEnum `json:"name"`
	PrincipalArn *string          `json:"principalArn"`
	Value        *string          `json:"value"`
}
