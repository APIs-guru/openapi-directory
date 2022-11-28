package shared

import (
	"time"
)

// VpcLink
// Represents a VPC link.
type VpcLink struct {
	CreatedDate          *time.Time          `json:"CreatedDate,omitempty"`
	Name                 string              `json:"Name"`
	SecurityGroupIds     []string            `json:"SecurityGroupIds"`
	SubnetIds            []string            `json:"SubnetIds"`
	Tags                 map[string]string   `json:"Tags,omitempty"`
	VpcLinkID            string              `json:"VpcLinkId"`
	VpcLinkStatus        *VpcLinkStatusEnum  `json:"VpcLinkStatus,omitempty"`
	VpcLinkStatusMessage *string             `json:"VpcLinkStatusMessage,omitempty"`
	VpcLinkVersion       *VpcLinkVersionEnum `json:"VpcLinkVersion,omitempty"`
}
