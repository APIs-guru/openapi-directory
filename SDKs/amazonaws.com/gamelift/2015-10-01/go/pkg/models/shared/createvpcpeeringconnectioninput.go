package shared



type CreateVpcPeeringConnectionInput struct {
    FleetID string `json:"FleetId"`
    PeerVpcAwsAccountID string `json:"PeerVpcAwsAccountId"`
    PeerVpcID string `json:"PeerVpcId"`
    
}

