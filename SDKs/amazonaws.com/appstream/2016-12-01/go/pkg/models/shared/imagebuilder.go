package shared

import (
	"time"
)

// ImageBuilder
// Describes a virtual machine that is used to create an image.
type ImageBuilder struct {
	AccessEndpoints             []AccessEndpoint               `json:"AccessEndpoints,omitempty"`
	AppstreamAgentVersion       *string                        `json:"AppstreamAgentVersion,omitempty"`
	Arn                         *string                        `json:"Arn,omitempty"`
	CreatedTime                 *time.Time                     `json:"CreatedTime,omitempty"`
	Description                 *string                        `json:"Description,omitempty"`
	DisplayName                 *string                        `json:"DisplayName,omitempty"`
	DomainJoinInfo              *DomainJoinInfo                `json:"DomainJoinInfo,omitempty"`
	EnableDefaultInternetAccess *bool                          `json:"EnableDefaultInternetAccess,omitempty"`
	IamRoleArn                  *string                        `json:"IamRoleArn,omitempty"`
	ImageArn                    *string                        `json:"ImageArn,omitempty"`
	ImageBuilderErrors          []ResourceError                `json:"ImageBuilderErrors,omitempty"`
	InstanceType                *string                        `json:"InstanceType,omitempty"`
	Name                        string                         `json:"Name"`
	NetworkAccessConfiguration  *NetworkAccessConfiguration    `json:"NetworkAccessConfiguration,omitempty"`
	Platform                    *PlatformTypeEnum              `json:"Platform,omitempty"`
	State                       *ImageBuilderStateEnum         `json:"State,omitempty"`
	StateChangeReason           *ImageBuilderStateChangeReason `json:"StateChangeReason,omitempty"`
	VpcConfig                   *VpcConfig                     `json:"VpcConfig,omitempty"`
}
