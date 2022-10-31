package shared



type LogConfiguration struct {
    LogDriver LogDriverEnum `json:"logDriver"`
    Options map[string]string `json:"options,omitempty"`
    SecretOptions []Secret `json:"secretOptions,omitempty"`
    
}

