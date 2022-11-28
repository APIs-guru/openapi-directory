package shared

import (
	"time"
)

// TransitGatewayAttachment
// Describes an attachment between a resource and a transit gateway.
type TransitGatewayAttachment struct {
	Association                *TransitGatewayAttachmentAssociation
	CreationTime               *time.Time
	ResourceID                 *string
	ResourceOwnerID            *string
	ResourceType               *TransitGatewayAttachmentResourceTypeEnum
	State                      *TransitGatewayAttachmentStateEnum
	Tags                       []Tag
	TransitGatewayAttachmentID *string
	TransitGatewayID           *string
	TransitGatewayOwnerID      *string
}
