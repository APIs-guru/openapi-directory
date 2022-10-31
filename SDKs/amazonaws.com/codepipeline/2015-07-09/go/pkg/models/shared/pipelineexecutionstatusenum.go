package shared




type PipelineExecutionStatusEnum string

const (
    PipelineExecutionStatusEnumCancelled PipelineExecutionStatusEnum = "Cancelled"
PipelineExecutionStatusEnumInProgress PipelineExecutionStatusEnum = "InProgress"
PipelineExecutionStatusEnumStopped PipelineExecutionStatusEnum = "Stopped"
PipelineExecutionStatusEnumStopping PipelineExecutionStatusEnum = "Stopping"
PipelineExecutionStatusEnumSucceeded PipelineExecutionStatusEnum = "Succeeded"
PipelineExecutionStatusEnumSuperseded PipelineExecutionStatusEnum = "Superseded"
PipelineExecutionStatusEnumFailed PipelineExecutionStatusEnum = "Failed"
)


