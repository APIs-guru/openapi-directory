package shared

type UpdateFleetRequest struct {
	AttributesToDelete             []FleetAttributeEnum `json:"AttributesToDelete"`
	ComputeCapacity                *ComputeCapacity     `json:"ComputeCapacity"`
	DeleteVpcConfig                *bool                `json:"DeleteVpcConfig"`
	Description                    *string              `json:"Description"`
	DisconnectTimeoutInSeconds     *int64               `json:"DisconnectTimeoutInSeconds"`
	DisplayName                    *string              `json:"DisplayName"`
	DomainJoinInfo                 *DomainJoinInfo      `json:"DomainJoinInfo"`
	EnableDefaultInternetAccess    *bool                `json:"EnableDefaultInternetAccess"`
	IamRoleArn                     *string              `json:"IamRoleArn"`
	IdleDisconnectTimeoutInSeconds *int64               `json:"IdleDisconnectTimeoutInSeconds"`
	ImageArn                       *string              `json:"ImageArn"`
	ImageName                      *string              `json:"ImageName"`
	InstanceType                   *string              `json:"InstanceType"`
	MaxUserDurationInSeconds       *int64               `json:"MaxUserDurationInSeconds"`
	Name                           *string              `json:"Name"`
	StreamView                     *StreamViewEnum      `json:"StreamView"`
	VpcConfig                      *VpcConfig           `json:"VpcConfig"`
}
