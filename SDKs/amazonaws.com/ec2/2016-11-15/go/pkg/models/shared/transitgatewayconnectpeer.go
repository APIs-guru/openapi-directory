package shared

import (
	"time"
)

// TransitGatewayConnectPeer
// Describes a transit gateway Connect peer.
type TransitGatewayConnectPeer struct {
	ConnectPeerConfiguration    *TransitGatewayConnectPeerConfiguration
	CreationTime                *time.Time
	State                       *TransitGatewayConnectPeerStateEnum
	Tags                        []Tag
	TransitGatewayAttachmentID  *string
	TransitGatewayConnectPeerID *string
}
