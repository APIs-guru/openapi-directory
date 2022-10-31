package shared



type ImageConfiguration struct {
    Port *string `json:"Port,omitempty"`
    RuntimeEnvironmentVariables map[string]string `json:"RuntimeEnvironmentVariables,omitempty"`
    StartCommand *string `json:"StartCommand,omitempty"`
    
}

