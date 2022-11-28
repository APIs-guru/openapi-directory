package shared

// LocalGateway
// Describes a local gateway.
type LocalGateway struct {
	LocalGatewayID *string
	OutpostArn     *string
	OwnerID        *string
	State          *string
	Tags           []Tag
}
