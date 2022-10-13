package shared

import (
	"time"
)

type ConfigurationItem struct {
	AccountID                    *string                      `json:"accountId"`
	Arn                          *string                      `json:"arn"`
	AvailabilityZone             *string                      `json:"availabilityZone"`
	AwsRegion                    *string                      `json:"awsRegion"`
	Configuration                *string                      `json:"configuration"`
	ConfigurationItemCaptureTime *time.Time                   `json:"configurationItemCaptureTime"`
	ConfigurationItemMd5Hash     *string                      `json:"configurationItemMD5Hash"`
	ConfigurationItemStatus      *ConfigurationItemStatusEnum `json:"configurationItemStatus"`
	ConfigurationStateID         *string                      `json:"configurationStateId"`
	RelatedEvents                []string                     `json:"relatedEvents"`
	Relationships                []Relationship               `json:"relationships"`
	ResourceCreationTime         *time.Time                   `json:"resourceCreationTime"`
	ResourceID                   *string                      `json:"resourceId"`
	ResourceName                 *string                      `json:"resourceName"`
	ResourceType                 *ResourceTypeEnum            `json:"resourceType"`
	SupplementaryConfiguration   map[string]string            `json:"supplementaryConfiguration"`
	Tags                         map[string]string            `json:"tags"`
	Version                      *string                      `json:"version"`
}
