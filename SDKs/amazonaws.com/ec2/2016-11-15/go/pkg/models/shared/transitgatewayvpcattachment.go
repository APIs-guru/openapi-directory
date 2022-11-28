package shared

import (
	"time"
)

// TransitGatewayVpcAttachment
// Describes a VPC attachment.
type TransitGatewayVpcAttachment struct {
	CreationTime               *time.Time
	Options                    *TransitGatewayVpcAttachmentOptions
	State                      *TransitGatewayAttachmentStateEnum
	SubnetIds                  []string
	Tags                       []Tag
	TransitGatewayAttachmentID *string
	TransitGatewayID           *string
	VpcID                      *string
	VpcOwnerID                 *string
}
