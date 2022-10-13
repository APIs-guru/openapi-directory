package shared

type AssociatedGateway struct {
	ID           *string          `json:"id"`
	OwnerAccount *string          `json:"ownerAccount"`
	Region       *string          `json:"region"`
	Type         *GatewayTypeEnum `json:"type"`
}
