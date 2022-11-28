package shared

import (
	"time"
)

// TransitGateway
// Describes a transit gateway.
type TransitGateway struct {
	CreationTime      *time.Time
	Description       *string
	Options           *TransitGatewayOptions
	OwnerID           *string
	State             *TransitGatewayStateEnum
	Tags              []Tag
	TransitGatewayArn *string
	TransitGatewayID  *string
}
