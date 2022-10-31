package shared



type AdminSetUserPasswordRequest struct {
    Password string `json:"Password"`
    Permanent *bool `json:"Permanent,omitempty"`
    UserPoolID string `json:"UserPoolId"`
    Username string `json:"Username"`
    
}

