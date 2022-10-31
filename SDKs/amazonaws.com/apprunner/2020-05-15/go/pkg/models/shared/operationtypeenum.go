package shared




type OperationTypeEnum string

const (
    OperationTypeEnumStartDeployment OperationTypeEnum = "START_DEPLOYMENT"
OperationTypeEnumCreateService OperationTypeEnum = "CREATE_SERVICE"
OperationTypeEnumPauseService OperationTypeEnum = "PAUSE_SERVICE"
OperationTypeEnumResumeService OperationTypeEnum = "RESUME_SERVICE"
OperationTypeEnumDeleteService OperationTypeEnum = "DELETE_SERVICE"
)


