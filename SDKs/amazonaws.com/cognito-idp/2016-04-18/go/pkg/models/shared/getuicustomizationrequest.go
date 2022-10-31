package shared



type GetUICustomizationRequest struct {
    ClientID *string `json:"ClientId,omitempty"`
    UserPoolID string `json:"UserPoolId"`
    
}

