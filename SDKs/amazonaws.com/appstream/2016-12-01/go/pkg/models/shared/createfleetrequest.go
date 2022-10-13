package shared

type CreateFleetRequest struct {
	ComputeCapacity                ComputeCapacity   `json:"ComputeCapacity"`
	Description                    *string           `json:"Description"`
	DisconnectTimeoutInSeconds     *int64            `json:"DisconnectTimeoutInSeconds"`
	DisplayName                    *string           `json:"DisplayName"`
	DomainJoinInfo                 *DomainJoinInfo   `json:"DomainJoinInfo"`
	EnableDefaultInternetAccess    *bool             `json:"EnableDefaultInternetAccess"`
	FleetType                      *FleetTypeEnum    `json:"FleetType"`
	IamRoleArn                     *string           `json:"IamRoleArn"`
	IdleDisconnectTimeoutInSeconds *int64            `json:"IdleDisconnectTimeoutInSeconds"`
	ImageArn                       *string           `json:"ImageArn"`
	ImageName                      *string           `json:"ImageName"`
	InstanceType                   string            `json:"InstanceType"`
	MaxUserDurationInSeconds       *int64            `json:"MaxUserDurationInSeconds"`
	Name                           string            `json:"Name"`
	StreamView                     *StreamViewEnum   `json:"StreamView"`
	Tags                           map[string]string `json:"Tags"`
	VpcConfig                      *VpcConfig        `json:"VpcConfig"`
}
