package shared

// DeleteVpcPeeringAuthorizationInput
// Represents the input for a request operation.
type DeleteVpcPeeringAuthorizationInput struct {
	GameLiftAwsAccountID string `json:"GameLiftAwsAccountId"`
	PeerVpcID            string `json:"PeerVpcId"`
}
