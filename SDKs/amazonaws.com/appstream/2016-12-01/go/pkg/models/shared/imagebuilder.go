package shared

import (
	"time"
)

type ImageBuilder struct {
	AccessEndpoints             []AccessEndpoint               `json:"AccessEndpoints"`
	AppstreamAgentVersion       *string                        `json:"AppstreamAgentVersion"`
	Arn                         *string                        `json:"Arn"`
	CreatedTime                 *time.Time                     `json:"CreatedTime"`
	Description                 *string                        `json:"Description"`
	DisplayName                 *string                        `json:"DisplayName"`
	DomainJoinInfo              *DomainJoinInfo                `json:"DomainJoinInfo"`
	EnableDefaultInternetAccess *bool                          `json:"EnableDefaultInternetAccess"`
	IamRoleArn                  *string                        `json:"IamRoleArn"`
	ImageArn                    *string                        `json:"ImageArn"`
	ImageBuilderErrors          []ResourceError                `json:"ImageBuilderErrors"`
	InstanceType                *string                        `json:"InstanceType"`
	Name                        string                         `json:"Name"`
	NetworkAccessConfiguration  *NetworkAccessConfiguration    `json:"NetworkAccessConfiguration"`
	Platform                    *PlatformTypeEnum              `json:"Platform"`
	State                       *ImageBuilderStateEnum         `json:"State"`
	StateChangeReason           *ImageBuilderStateChangeReason `json:"StateChangeReason"`
	VpcConfig                   *VpcConfig                     `json:"VpcConfig"`
}
