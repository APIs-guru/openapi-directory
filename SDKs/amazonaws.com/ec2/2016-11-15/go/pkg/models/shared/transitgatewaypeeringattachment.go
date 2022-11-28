package shared

import (
	"time"
)

// TransitGatewayPeeringAttachment
// Describes the transit gateway peering attachment.
type TransitGatewayPeeringAttachment struct {
	AccepterTgwInfo            *PeeringTgwInfo
	CreationTime               *time.Time
	RequesterTgwInfo           *PeeringTgwInfo
	State                      *TransitGatewayAttachmentStateEnum
	Status                     *PeeringAttachmentStatus
	Tags                       []Tag
	TransitGatewayAttachmentID *string
}
