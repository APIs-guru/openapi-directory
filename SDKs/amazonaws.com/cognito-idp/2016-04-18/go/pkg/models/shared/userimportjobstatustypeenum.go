package shared




type UserImportJobStatusTypeEnum string

const (
    UserImportJobStatusTypeEnumCreated UserImportJobStatusTypeEnum = "Created"
UserImportJobStatusTypeEnumPending UserImportJobStatusTypeEnum = "Pending"
UserImportJobStatusTypeEnumInProgress UserImportJobStatusTypeEnum = "InProgress"
UserImportJobStatusTypeEnumStopping UserImportJobStatusTypeEnum = "Stopping"
UserImportJobStatusTypeEnumExpired UserImportJobStatusTypeEnum = "Expired"
UserImportJobStatusTypeEnumStopped UserImportJobStatusTypeEnum = "Stopped"
UserImportJobStatusTypeEnumFailed UserImportJobStatusTypeEnum = "Failed"
UserImportJobStatusTypeEnumSucceeded UserImportJobStatusTypeEnum = "Succeeded"
)


