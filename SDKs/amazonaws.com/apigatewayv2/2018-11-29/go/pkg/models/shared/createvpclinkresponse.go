package shared

import (
	"time"
)

type CreateVpcLinkResponse struct {
	CreatedDate          *time.Time          `json:"CreatedDate"`
	Name                 *string             `json:"Name"`
	SecurityGroupIds     []string            `json:"SecurityGroupIds"`
	SubnetIds            []string            `json:"SubnetIds"`
	Tags                 map[string]string   `json:"Tags"`
	VpcLinkID            *string             `json:"VpcLinkId"`
	VpcLinkStatus        *VpcLinkStatusEnum  `json:"VpcLinkStatus"`
	VpcLinkStatusMessage *string             `json:"VpcLinkStatusMessage"`
	VpcLinkVersion       *VpcLinkVersionEnum `json:"VpcLinkVersion"`
}
