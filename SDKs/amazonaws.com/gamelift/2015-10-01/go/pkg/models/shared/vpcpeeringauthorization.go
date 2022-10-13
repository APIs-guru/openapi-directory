package shared

import (
	"time"
)

type VpcPeeringAuthorization struct {
	CreationTime         *time.Time `json:"CreationTime"`
	ExpirationTime       *time.Time `json:"ExpirationTime"`
	GameLiftAwsAccountID *string    `json:"GameLiftAwsAccountId"`
	PeerVpcAwsAccountID  *string    `json:"PeerVpcAwsAccountId"`
	PeerVpcID            *string    `json:"PeerVpcId"`
}
