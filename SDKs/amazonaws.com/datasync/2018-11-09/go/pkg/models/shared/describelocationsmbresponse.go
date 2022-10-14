package shared

import (
	"time"
)

type DescribeLocationSmbResponse struct {
	AgentArns    []string         `json:"AgentArns,omitempty"`
	CreationTime *time.Time       `json:"CreationTime,omitempty"`
	Domain       *string          `json:"Domain,omitempty"`
	LocationArn  *string          `json:"LocationArn,omitempty"`
	LocationURI  *string          `json:"LocationUri,omitempty"`
	MountOptions *SmbMountOptions `json:"MountOptions,omitempty"`
	User         *string          `json:"User,omitempty"`
}
