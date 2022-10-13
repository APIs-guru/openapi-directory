package shared

type LogConfiguration struct {
	LogDriver     LogDriverEnum     `json:"logDriver"`
	Options       map[string]string `json:"options"`
	SecretOptions []Secret          `json:"secretOptions"`
}
