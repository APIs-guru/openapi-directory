package shared

import (
	"time"
)

// TransitGatewayConnect
// Describes a transit gateway Connect attachment.
type TransitGatewayConnect struct {
	CreationTime                        *time.Time
	Options                             *TransitGatewayConnectOptions
	State                               *TransitGatewayAttachmentStateEnum
	Tags                                []Tag
	TransitGatewayAttachmentID          *string
	TransitGatewayID                    *string
	TransportTransitGatewayAttachmentID *string
}
