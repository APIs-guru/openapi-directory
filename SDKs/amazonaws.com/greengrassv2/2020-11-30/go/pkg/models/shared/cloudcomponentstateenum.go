package shared




type CloudComponentStateEnum string

const (
    CloudComponentStateEnumRequested CloudComponentStateEnum = "REQUESTED"
CloudComponentStateEnumInitiated CloudComponentStateEnum = "INITIATED"
CloudComponentStateEnumDeployable CloudComponentStateEnum = "DEPLOYABLE"
CloudComponentStateEnumFailed CloudComponentStateEnum = "FAILED"
CloudComponentStateEnumDeprecated CloudComponentStateEnum = "DEPRECATED"
)


