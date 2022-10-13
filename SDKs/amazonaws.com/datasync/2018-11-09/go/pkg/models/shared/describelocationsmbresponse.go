package shared

import (
	"time"
)

type DescribeLocationSmbResponse struct {
	AgentArns    []string         `json:"AgentArns"`
	CreationTime *time.Time       `json:"CreationTime"`
	Domain       *string          `json:"Domain"`
	LocationArn  *string          `json:"LocationArn"`
	LocationURI  *string          `json:"LocationUri"`
	MountOptions *SmbMountOptions `json:"MountOptions"`
	User         *string          `json:"User"`
}
