package shared

import (
	"time"
)

type ReplicaDescription struct {
	GlobalSecondaryIndexes        []ReplicaGlobalSecondaryIndexDescription `json:"GlobalSecondaryIndexes"`
	KmsMasterKeyID                *string                                  `json:"KMSMasterKeyId"`
	ProvisionedThroughputOverride *ProvisionedThroughputOverride           `json:"ProvisionedThroughputOverride"`
	RegionName                    *string                                  `json:"RegionName"`
	ReplicaInaccessibleDateTime   *time.Time                               `json:"ReplicaInaccessibleDateTime"`
	ReplicaStatus                 *ReplicaStatusEnum                       `json:"ReplicaStatus"`
	ReplicaStatusDescription      *string                                  `json:"ReplicaStatusDescription"`
	ReplicaStatusPercentProgress  *string                                  `json:"ReplicaStatusPercentProgress"`
}
