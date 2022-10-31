package shared



type SecurityServicePolicyData struct {
    ManagedServiceData *string `json:"ManagedServiceData,omitempty"`
    Type SecurityServiceTypeEnum `json:"Type"`
    
}

