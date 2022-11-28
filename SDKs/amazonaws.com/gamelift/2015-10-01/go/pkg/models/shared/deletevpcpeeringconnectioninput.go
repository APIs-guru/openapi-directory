package shared

// DeleteVpcPeeringConnectionInput
// Represents the input for a request operation.
type DeleteVpcPeeringConnectionInput struct {
	FleetID                string `json:"FleetId"`
	VpcPeeringConnectionID string `json:"VpcPeeringConnectionId"`
}
