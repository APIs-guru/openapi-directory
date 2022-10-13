package shared

import (
	"time"
)

type Fleet struct {
	Arn                            string                `json:"Arn"`
	ComputeCapacityStatus          ComputeCapacityStatus `json:"ComputeCapacityStatus"`
	CreatedTime                    *time.Time            `json:"CreatedTime"`
	Description                    *string               `json:"Description"`
	DisconnectTimeoutInSeconds     *int64                `json:"DisconnectTimeoutInSeconds"`
	DisplayName                    *string               `json:"DisplayName"`
	DomainJoinInfo                 *DomainJoinInfo       `json:"DomainJoinInfo"`
	EnableDefaultInternetAccess    *bool                 `json:"EnableDefaultInternetAccess"`
	FleetErrors                    []FleetError          `json:"FleetErrors"`
	FleetType                      *FleetTypeEnum        `json:"FleetType"`
	IamRoleArn                     *string               `json:"IamRoleArn"`
	IdleDisconnectTimeoutInSeconds *int64                `json:"IdleDisconnectTimeoutInSeconds"`
	ImageArn                       *string               `json:"ImageArn"`
	ImageName                      *string               `json:"ImageName"`
	InstanceType                   string                `json:"InstanceType"`
	MaxUserDurationInSeconds       *int64                `json:"MaxUserDurationInSeconds"`
	Name                           string                `json:"Name"`
	State                          FleetStateEnum        `json:"State"`
	StreamView                     *StreamViewEnum       `json:"StreamView"`
	VpcConfig                      *VpcConfig            `json:"VpcConfig"`
}
