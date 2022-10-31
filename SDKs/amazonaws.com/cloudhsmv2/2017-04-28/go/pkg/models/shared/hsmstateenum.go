package shared




type HsmStateEnum string

const (
    HsmStateEnumCreateInProgress HsmStateEnum = "CREATE_IN_PROGRESS"
HsmStateEnumActive HsmStateEnum = "ACTIVE"
HsmStateEnumDegraded HsmStateEnum = "DEGRADED"
HsmStateEnumDeleteInProgress HsmStateEnum = "DELETE_IN_PROGRESS"
HsmStateEnumDeleted HsmStateEnum = "DELETED"
)


