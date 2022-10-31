package shared

import (
	"time"
)

type ReplicaDescription struct {
	GlobalSecondaryIndexes        []ReplicaGlobalSecondaryIndexDescription `json:"GlobalSecondaryIndexes,omitempty"`
	KmsMasterKeyID                *string                                  `json:"KMSMasterKeyId,omitempty"`
	ProvisionedThroughputOverride *ProvisionedThroughputOverride           `json:"ProvisionedThroughputOverride,omitempty"`
	RegionName                    *string                                  `json:"RegionName,omitempty"`
	ReplicaInaccessibleDateTime   *time.Time                               `json:"ReplicaInaccessibleDateTime,omitempty"`
	ReplicaStatus                 *ReplicaStatusEnum                       `json:"ReplicaStatus,omitempty"`
	ReplicaStatusDescription      *string                                  `json:"ReplicaStatusDescription,omitempty"`
	ReplicaStatusPercentProgress  *string                                  `json:"ReplicaStatusPercentProgress,omitempty"`
}
