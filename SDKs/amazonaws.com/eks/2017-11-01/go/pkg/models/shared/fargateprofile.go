package shared

import (
"time")

type FargateProfile struct {
    ClusterName *string `json:"clusterName,omitempty"`
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    FargateProfileArn *string `json:"fargateProfileArn,omitempty"`
    FargateProfileName *string `json:"fargateProfileName,omitempty"`
    PodExecutionRoleArn *string `json:"podExecutionRoleArn,omitempty"`
    Selectors []FargateProfileSelector `json:"selectors,omitempty"`
    Status *FargateProfileStatusEnum `json:"status,omitempty"`
    Subnets []string `json:"subnets,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    
}

