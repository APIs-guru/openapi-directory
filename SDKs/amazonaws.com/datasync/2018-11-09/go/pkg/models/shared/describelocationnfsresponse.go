package shared

import (
	"time"
)

// DescribeLocationNfsResponse
// DescribeLocationNfsResponse
type DescribeLocationNfsResponse struct {
	CreationTime *time.Time       `json:"CreationTime,omitempty"`
	LocationArn  *string          `json:"LocationArn,omitempty"`
	LocationURI  *string          `json:"LocationUri,omitempty"`
	MountOptions *NfsMountOptions `json:"MountOptions,omitempty"`
	OnPremConfig *OnPremConfig    `json:"OnPremConfig,omitempty"`
}
