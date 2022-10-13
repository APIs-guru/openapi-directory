package shared

import (
	"time"
)

type FargateProfile struct {
	ClusterName         *string                   `json:"clusterName"`
	CreatedAt           *time.Time                `json:"createdAt"`
	FargateProfileArn   *string                   `json:"fargateProfileArn"`
	FargateProfileName  *string                   `json:"fargateProfileName"`
	PodExecutionRoleArn *string                   `json:"podExecutionRoleArn"`
	Selectors           []FargateProfileSelector  `json:"selectors"`
	Status              *FargateProfileStatusEnum `json:"status"`
	Subnets             []string                  `json:"subnets"`
	Tags                map[string]string         `json:"tags"`
}
