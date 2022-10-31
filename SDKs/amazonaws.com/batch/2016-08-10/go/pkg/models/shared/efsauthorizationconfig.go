package shared



type EfsAuthorizationConfig struct {
    AccessPointID *string `json:"accessPointId,omitempty"`
    Iam *EfsAuthorizationConfigIamEnum `json:"iam,omitempty"`
    
}

