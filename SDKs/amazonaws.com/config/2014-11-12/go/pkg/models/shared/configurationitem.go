package shared

import (
"time")

type ConfigurationItem struct {
    AccountID *string `json:"accountId,omitempty"`
    Arn *string `json:"arn,omitempty"`
    AvailabilityZone *string `json:"availabilityZone,omitempty"`
    AwsRegion *string `json:"awsRegion,omitempty"`
    Configuration *string `json:"configuration,omitempty"`
    ConfigurationItemCaptureTime *time.Time `json:"configurationItemCaptureTime,omitempty"`
    ConfigurationItemMd5Hash *string `json:"configurationItemMD5Hash,omitempty"`
    ConfigurationItemStatus *ConfigurationItemStatusEnum `json:"configurationItemStatus,omitempty"`
    ConfigurationStateID *string `json:"configurationStateId,omitempty"`
    RelatedEvents []string `json:"relatedEvents,omitempty"`
    Relationships []Relationship `json:"relationships,omitempty"`
    ResourceCreationTime *time.Time `json:"resourceCreationTime,omitempty"`
    ResourceID *string `json:"resourceId,omitempty"`
    ResourceName *string `json:"resourceName,omitempty"`
    ResourceType *ResourceTypeEnum `json:"resourceType,omitempty"`
    SupplementaryConfiguration map[string]string `json:"supplementaryConfiguration,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    Version *string `json:"version,omitempty"`
    
}

