package shared

type PutAccountSettingRequest struct {
	Name         SettingNameEnum `json:"name"`
	PrincipalArn *string         `json:"principalArn"`
	Value        string          `json:"value"`
}
