package shared

import (
	"time"
)

// AutoScalingConfiguration
// <p>Describes an AWS App Runner automatic scaling configuration resource. Multiple revisions of a configuration have the same <code>AutoScalingConfigurationName</code> and different <code>AutoScalingConfigurationRevision</code> values.</p> <p>A higher <code>MinSize</code> increases the spread of your App Runner service over more Availability Zones in the AWS Region. The tradeoff is a higher minimal cost.</p> <p>A lower <code>MaxSize</code> controls your cost. The tradeoff is lower responsiveness during peak demand.</p>
type AutoScalingConfiguration struct {
	AutoScalingConfigurationArn      *string                             `json:"AutoScalingConfigurationArn,omitempty"`
	AutoScalingConfigurationName     *string                             `json:"AutoScalingConfigurationName,omitempty"`
	AutoScalingConfigurationRevision *int64                              `json:"AutoScalingConfigurationRevision,omitempty"`
	CreatedAt                        *time.Time                          `json:"CreatedAt,omitempty"`
	DeletedAt                        *time.Time                          `json:"DeletedAt,omitempty"`
	Latest                           *bool                               `json:"Latest,omitempty"`
	MaxConcurrency                   *int64                              `json:"MaxConcurrency,omitempty"`
	MaxSize                          *int64                              `json:"MaxSize,omitempty"`
	MinSize                          *int64                              `json:"MinSize,omitempty"`
	Status                           *AutoScalingConfigurationStatusEnum `json:"Status,omitempty"`
}
