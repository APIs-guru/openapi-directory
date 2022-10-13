package shared

type FirelensConfiguration struct {
	Options map[string]string             `json:"options"`
	Type    FirelensConfigurationTypeEnum `json:"type"`
}
