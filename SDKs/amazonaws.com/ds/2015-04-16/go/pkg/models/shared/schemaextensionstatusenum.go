package shared




type SchemaExtensionStatusEnum string

const (
    SchemaExtensionStatusEnumInitializing SchemaExtensionStatusEnum = "Initializing"
SchemaExtensionStatusEnumCreatingSnapshot SchemaExtensionStatusEnum = "CreatingSnapshot"
SchemaExtensionStatusEnumUpdatingSchema SchemaExtensionStatusEnum = "UpdatingSchema"
SchemaExtensionStatusEnumReplicating SchemaExtensionStatusEnum = "Replicating"
SchemaExtensionStatusEnumCancelInProgress SchemaExtensionStatusEnum = "CancelInProgress"
SchemaExtensionStatusEnumRollbackInProgress SchemaExtensionStatusEnum = "RollbackInProgress"
SchemaExtensionStatusEnumCancelled SchemaExtensionStatusEnum = "Cancelled"
SchemaExtensionStatusEnumFailed SchemaExtensionStatusEnum = "Failed"
SchemaExtensionStatusEnumCompleted SchemaExtensionStatusEnum = "Completed"
)


