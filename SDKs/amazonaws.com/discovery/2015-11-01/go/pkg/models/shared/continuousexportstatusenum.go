package shared




type ContinuousExportStatusEnum string

const (
    ContinuousExportStatusEnumStartInProgress ContinuousExportStatusEnum = "START_IN_PROGRESS"
ContinuousExportStatusEnumStartFailed ContinuousExportStatusEnum = "START_FAILED"
ContinuousExportStatusEnumActive ContinuousExportStatusEnum = "ACTIVE"
ContinuousExportStatusEnumError ContinuousExportStatusEnum = "ERROR"
ContinuousExportStatusEnumStopInProgress ContinuousExportStatusEnum = "STOP_IN_PROGRESS"
ContinuousExportStatusEnumStopFailed ContinuousExportStatusEnum = "STOP_FAILED"
ContinuousExportStatusEnumInactive ContinuousExportStatusEnum = "INACTIVE"
)


