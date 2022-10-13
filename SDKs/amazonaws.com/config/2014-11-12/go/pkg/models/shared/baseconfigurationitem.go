package shared

import (
	"time"
)

type BaseConfigurationItem struct {
	AccountID                    *string                      `json:"accountId"`
	Arn                          *string                      `json:"arn"`
	AvailabilityZone             *string                      `json:"availabilityZone"`
	AwsRegion                    *string                      `json:"awsRegion"`
	Configuration                *string                      `json:"configuration"`
	ConfigurationItemCaptureTime *time.Time                   `json:"configurationItemCaptureTime"`
	ConfigurationItemStatus      *ConfigurationItemStatusEnum `json:"configurationItemStatus"`
	ConfigurationStateID         *string                      `json:"configurationStateId"`
	ResourceCreationTime         *time.Time                   `json:"resourceCreationTime"`
	ResourceID                   *string                      `json:"resourceId"`
	ResourceName                 *string                      `json:"resourceName"`
	ResourceType                 *ResourceTypeEnum            `json:"resourceType"`
	SupplementaryConfiguration   map[string]string            `json:"supplementaryConfiguration"`
	Version                      *string                      `json:"version"`
}
