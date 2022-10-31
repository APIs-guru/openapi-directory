package shared



type AssociatedGateway struct {
    ID *string `json:"id,omitempty"`
    OwnerAccount *string `json:"ownerAccount,omitempty"`
    Region *string `json:"region,omitempty"`
    Type *GatewayTypeEnum `json:"type,omitempty"`
    
}

