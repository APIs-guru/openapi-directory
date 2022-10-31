package shared



type FirelensConfiguration struct {
    Options map[string]string `json:"options,omitempty"`
    Type FirelensConfigurationTypeEnum `json:"type"`
    
}

