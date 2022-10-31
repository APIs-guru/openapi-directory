package shared




type ReplicaStatusEnum string

const (
    ReplicaStatusEnumCreating ReplicaStatusEnum = "CREATING"
ReplicaStatusEnumCreationFailed ReplicaStatusEnum = "CREATION_FAILED"
ReplicaStatusEnumUpdating ReplicaStatusEnum = "UPDATING"
ReplicaStatusEnumDeleting ReplicaStatusEnum = "DELETING"
ReplicaStatusEnumActive ReplicaStatusEnum = "ACTIVE"
ReplicaStatusEnumRegionDisabled ReplicaStatusEnum = "REGION_DISABLED"
ReplicaStatusEnumInaccessibleEncryptionCredentials ReplicaStatusEnum = "INACCESSIBLE_ENCRYPTION_CREDENTIALS"
)


