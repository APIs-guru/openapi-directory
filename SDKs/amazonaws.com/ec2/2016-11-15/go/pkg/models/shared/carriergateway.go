package shared

// CarrierGateway
// Describes a carrier gateway.
type CarrierGateway struct {
	CarrierGatewayID *string
	OwnerID          *string
	State            *CarrierGatewayStateEnum
	Tags             []Tag
	VpcID            *string
}
