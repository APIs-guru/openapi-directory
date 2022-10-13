package shared

import (
	"time"
)

type AutoScalingConfiguration struct {
	AutoScalingConfigurationArn      *string                             `json:"AutoScalingConfigurationArn"`
	AutoScalingConfigurationName     *string                             `json:"AutoScalingConfigurationName"`
	AutoScalingConfigurationRevision *int64                              `json:"AutoScalingConfigurationRevision"`
	CreatedAt                        *time.Time                          `json:"CreatedAt"`
	DeletedAt                        *time.Time                          `json:"DeletedAt"`
	Latest                           *bool                               `json:"Latest"`
	MaxConcurrency                   *int64                              `json:"MaxConcurrency"`
	MaxSize                          *int64                              `json:"MaxSize"`
	MinSize                          *int64                              `json:"MinSize"`
	Status                           *AutoScalingConfigurationStatusEnum `json:"Status"`
}
