package shared



type AdditionalInstanceConfiguration struct {
    SystemsManagerAgent *SystemsManagerAgent `json:"systemsManagerAgent,omitempty"`
    UserDataOverride *string `json:"userDataOverride,omitempty"`
    
}

