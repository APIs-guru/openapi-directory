package shared

type BuildSystemSharedDtoActivityRunStatusStatusEnum string

const (
	BuildSystemSharedDtoActivityRunStatusStatusEnumReady      BuildSystemSharedDtoActivityRunStatusStatusEnum = "Ready"
	BuildSystemSharedDtoActivityRunStatusStatusEnumInProgress BuildSystemSharedDtoActivityRunStatusStatusEnum = "InProgress"
	BuildSystemSharedDtoActivityRunStatusStatusEnumSucceeded  BuildSystemSharedDtoActivityRunStatusStatusEnum = "Succeeded"
	BuildSystemSharedDtoActivityRunStatusStatusEnumCancelled  BuildSystemSharedDtoActivityRunStatusStatusEnum = "Cancelled"
	BuildSystemSharedDtoActivityRunStatusStatusEnumFailed     BuildSystemSharedDtoActivityRunStatusStatusEnum = "Failed"
)

type BuildSystemSharedDtoActivityRunStatus struct {
	CurrentStep  *int32                                           `json:"CurrentStep" form:"name=CurrentStep"`
	Status       *BuildSystemSharedDtoActivityRunStatusStatusEnum `json:"Status" form:"name=Status"`
	StepProgress *int32                                           `json:"StepProgress" form:"name=StepProgress"`
	StepStatus   *string                                          `json:"StepStatus" form:"name=StepStatus"`
}
