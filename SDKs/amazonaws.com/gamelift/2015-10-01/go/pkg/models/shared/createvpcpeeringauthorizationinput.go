package shared

// CreateVpcPeeringAuthorizationInput
// Represents the input for a request operation.
type CreateVpcPeeringAuthorizationInput struct {
	GameLiftAwsAccountID string `json:"GameLiftAwsAccountId"`
	PeerVpcID            string `json:"PeerVpcId"`
}
