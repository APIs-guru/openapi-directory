package shared



type Account struct {
    APIKeyVersion *string `json:"apiKeyVersion,omitempty"`
    CloudwatchRoleArn *string `json:"cloudwatchRoleArn,omitempty"`
    Features []string `json:"features,omitempty"`
    ThrottleSettings *ThrottleSettings `json:"throttleSettings,omitempty"`
    
}

