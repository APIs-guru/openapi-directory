package shared

type CreateImageBuilderRequest struct {
	AccessEndpoints             []AccessEndpoint  `json:"AccessEndpoints,omitempty"`
	AppstreamAgentVersion       *string           `json:"AppstreamAgentVersion,omitempty"`
	Description                 *string           `json:"Description,omitempty"`
	DisplayName                 *string           `json:"DisplayName,omitempty"`
	DomainJoinInfo              *DomainJoinInfo   `json:"DomainJoinInfo,omitempty"`
	EnableDefaultInternetAccess *bool             `json:"EnableDefaultInternetAccess,omitempty"`
	IamRoleArn                  *string           `json:"IamRoleArn,omitempty"`
	ImageArn                    *string           `json:"ImageArn,omitempty"`
	ImageName                   *string           `json:"ImageName,omitempty"`
	InstanceType                string            `json:"InstanceType"`
	Name                        string            `json:"Name"`
	Tags                        map[string]string `json:"Tags,omitempty"`
	VpcConfig                   *VpcConfig        `json:"VpcConfig,omitempty"`
}
