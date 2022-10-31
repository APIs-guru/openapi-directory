package shared



type ProvisionByoipCidrRequest struct {
    Cidr string `json:"Cidr"`
    CidrAuthorizationContext CidrAuthorizationContext `json:"CidrAuthorizationContext"`
    
}

