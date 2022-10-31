package shared

type PutAccountSettingDefaultRequest struct {
	Name  SettingNameEnum `json:"name"`
	Value string          `json:"value"`
}
