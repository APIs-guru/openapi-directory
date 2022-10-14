package shared

import (
	"time"
)

type VpcPeeringAuthorization struct {
	CreationTime         *time.Time `json:"CreationTime,omitempty"`
	ExpirationTime       *time.Time `json:"ExpirationTime,omitempty"`
	GameLiftAwsAccountID *string    `json:"GameLiftAwsAccountId,omitempty"`
	PeerVpcAwsAccountID  *string    `json:"PeerVpcAwsAccountId,omitempty"`
	PeerVpcID            *string    `json:"PeerVpcId,omitempty"`
}
