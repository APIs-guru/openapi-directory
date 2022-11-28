package shared

import (
	"time"
)

// VpcPeeringAuthorization
// <p>Represents an authorization for a VPC peering connection between the VPC for an Amazon GameLift fleet and another VPC on an account you have access to. This authorization must exist and be valid for the peering connection to be established. Authorizations are valid for 24 hours after they are issued.</p> <p> <b>Related actions</b> </p> <p> <a>CreateVpcPeeringAuthorization</a> | <a>DescribeVpcPeeringAuthorizations</a> | <a>DeleteVpcPeeringAuthorization</a> | <a>CreateVpcPeeringConnection</a> | <a>DescribeVpcPeeringConnections</a> | <a>DeleteVpcPeeringConnection</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
type VpcPeeringAuthorization struct {
	CreationTime         *time.Time `json:"CreationTime,omitempty"`
	ExpirationTime       *time.Time `json:"ExpirationTime,omitempty"`
	GameLiftAwsAccountID *string    `json:"GameLiftAwsAccountId,omitempty"`
	PeerVpcAwsAccountID  *string    `json:"PeerVpcAwsAccountId,omitempty"`
	PeerVpcID            *string    `json:"PeerVpcId,omitempty"`
}
