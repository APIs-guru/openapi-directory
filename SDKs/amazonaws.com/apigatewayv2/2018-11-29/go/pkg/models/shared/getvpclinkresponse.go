package shared

import (
"time")

type GetVpcLinkResponse struct {
    CreatedDate *time.Time `json:"CreatedDate,omitempty"`
    Name *string `json:"Name,omitempty"`
    SecurityGroupIds []string `json:"SecurityGroupIds,omitempty"`
    SubnetIds []string `json:"SubnetIds,omitempty"`
    Tags map[string]string `json:"Tags,omitempty"`
    VpcLinkID *string `json:"VpcLinkId,omitempty"`
    VpcLinkStatus *VpcLinkStatusEnum `json:"VpcLinkStatus,omitempty"`
    VpcLinkStatusMessage *string `json:"VpcLinkStatusMessage,omitempty"`
    VpcLinkVersion *VpcLinkVersionEnum `json:"VpcLinkVersion,omitempty"`
    
}

