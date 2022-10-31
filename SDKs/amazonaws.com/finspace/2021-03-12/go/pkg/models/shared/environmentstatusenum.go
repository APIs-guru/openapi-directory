package shared




type EnvironmentStatusEnum string

const (
    EnvironmentStatusEnumCreateRequested EnvironmentStatusEnum = "CREATE_REQUESTED"
EnvironmentStatusEnumCreating EnvironmentStatusEnum = "CREATING"
EnvironmentStatusEnumCreated EnvironmentStatusEnum = "CREATED"
EnvironmentStatusEnumDeleteRequested EnvironmentStatusEnum = "DELETE_REQUESTED"
EnvironmentStatusEnumDeleting EnvironmentStatusEnum = "DELETING"
EnvironmentStatusEnumDeleted EnvironmentStatusEnum = "DELETED"
EnvironmentStatusEnumFailedCreation EnvironmentStatusEnum = "FAILED_CREATION"
EnvironmentStatusEnumRetryDeletion EnvironmentStatusEnum = "RETRY_DELETION"
EnvironmentStatusEnumFailedDeletion EnvironmentStatusEnum = "FAILED_DELETION"
EnvironmentStatusEnumSuspended EnvironmentStatusEnum = "SUSPENDED"
)


