package shared




type ApplicationStateEnum string

const (
    ApplicationStateEnumCreating ApplicationStateEnum = "CREATING"
ApplicationStateEnumDeleting ApplicationStateEnum = "DELETING"
ApplicationStateEnumActive ApplicationStateEnum = "ACTIVE"
ApplicationStateEnumCreateFailed ApplicationStateEnum = "CREATE_FAILED"
ApplicationStateEnumDeleteFailed ApplicationStateEnum = "DELETE_FAILED"
)


