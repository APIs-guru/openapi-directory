package shared




type BuildSystemSharedDtoActivityRunStatusStatusEnum string

const (
    BuildSystemSharedDtoActivityRunStatusStatusEnumReady BuildSystemSharedDtoActivityRunStatusStatusEnum = "Ready"
BuildSystemSharedDtoActivityRunStatusStatusEnumInProgress BuildSystemSharedDtoActivityRunStatusStatusEnum = "InProgress"
BuildSystemSharedDtoActivityRunStatusStatusEnumSucceeded BuildSystemSharedDtoActivityRunStatusStatusEnum = "Succeeded"
BuildSystemSharedDtoActivityRunStatusStatusEnumCancelled BuildSystemSharedDtoActivityRunStatusStatusEnum = "Cancelled"
BuildSystemSharedDtoActivityRunStatusStatusEnumFailed BuildSystemSharedDtoActivityRunStatusStatusEnum = "Failed"
)


type BuildSystemSharedDtoActivityRunStatus struct {
    CurrentStep *int32 `json:"CurrentStep,omitempty" form:"name=CurrentStep"`
    Status *BuildSystemSharedDtoActivityRunStatusStatusEnum `json:"Status,omitempty" form:"name=Status"`
    StepProgress *int32 `json:"StepProgress,omitempty" form:"name=StepProgress"`
    StepStatus *string `json:"StepStatus,omitempty" form:"name=StepStatus"`
    
}

