package shared

// CreateVpcPeeringConnectionInput
// Represents the input for a request operation.
type CreateVpcPeeringConnectionInput struct {
	FleetID             string `json:"FleetId"`
	PeerVpcAwsAccountID string `json:"PeerVpcAwsAccountId"`
	PeerVpcID           string `json:"PeerVpcId"`
}
