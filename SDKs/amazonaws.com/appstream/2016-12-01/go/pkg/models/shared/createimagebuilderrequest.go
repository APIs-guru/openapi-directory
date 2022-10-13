package shared

type CreateImageBuilderRequest struct {
	AccessEndpoints             []AccessEndpoint  `json:"AccessEndpoints"`
	AppstreamAgentVersion       *string           `json:"AppstreamAgentVersion"`
	Description                 *string           `json:"Description"`
	DisplayName                 *string           `json:"DisplayName"`
	DomainJoinInfo              *DomainJoinInfo   `json:"DomainJoinInfo"`
	EnableDefaultInternetAccess *bool             `json:"EnableDefaultInternetAccess"`
	IamRoleArn                  *string           `json:"IamRoleArn"`
	ImageArn                    *string           `json:"ImageArn"`
	ImageName                   *string           `json:"ImageName"`
	InstanceType                string            `json:"InstanceType"`
	Name                        string            `json:"Name"`
	Tags                        map[string]string `json:"Tags"`
	VpcConfig                   *VpcConfig        `json:"VpcConfig"`
}
