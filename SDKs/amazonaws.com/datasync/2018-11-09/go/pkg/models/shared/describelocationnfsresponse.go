package shared

import (
	"time"
)

type DescribeLocationNfsResponse struct {
	CreationTime *time.Time       `json:"CreationTime"`
	LocationArn  *string          `json:"LocationArn"`
	LocationURI  *string          `json:"LocationUri"`
	MountOptions *NfsMountOptions `json:"MountOptions"`
	OnPremConfig *OnPremConfig    `json:"OnPremConfig"`
}
