package shared



type GetCredentialsForIdentityResponse struct {
    Credentials *Credentials `json:"Credentials,omitempty"`
    IdentityID *string `json:"IdentityId,omitempty"`
    
}

