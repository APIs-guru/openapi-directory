package shared

import (
	"time"
)

type Image struct {
	Applications                []Application           `json:"Applications"`
	AppstreamAgentVersion       *string                 `json:"AppstreamAgentVersion"`
	Arn                         *string                 `json:"Arn"`
	BaseImageArn                *string                 `json:"BaseImageArn"`
	CreatedTime                 *time.Time              `json:"CreatedTime"`
	Description                 *string                 `json:"Description"`
	DisplayName                 *string                 `json:"DisplayName"`
	ImageBuilderName            *string                 `json:"ImageBuilderName"`
	ImageBuilderSupported       *bool                   `json:"ImageBuilderSupported"`
	ImageErrors                 []ResourceError         `json:"ImageErrors"`
	ImagePermissions            *ImagePermissions       `json:"ImagePermissions"`
	Name                        string                  `json:"Name"`
	Platform                    *PlatformTypeEnum       `json:"Platform"`
	PublicBaseImageReleasedDate *time.Time              `json:"PublicBaseImageReleasedDate"`
	State                       *ImageStateEnum         `json:"State"`
	StateChangeReason           *ImageStateChangeReason `json:"StateChangeReason"`
	Visibility                  *VisibilityTypeEnum     `json:"Visibility"`
}
