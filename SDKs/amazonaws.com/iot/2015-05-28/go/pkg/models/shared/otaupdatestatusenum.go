package shared




type OtaUpdateStatusEnum string

const (
    OtaUpdateStatusEnumCreatePending OtaUpdateStatusEnum = "CREATE_PENDING"
OtaUpdateStatusEnumCreateInProgress OtaUpdateStatusEnum = "CREATE_IN_PROGRESS"
OtaUpdateStatusEnumCreateComplete OtaUpdateStatusEnum = "CREATE_COMPLETE"
OtaUpdateStatusEnumCreateFailed OtaUpdateStatusEnum = "CREATE_FAILED"
)


