package shared

import (
"time")

type ActionExecutionDetail struct {
    ActionExecutionID *string `json:"actionExecutionId,omitempty"`
    ActionName *string `json:"actionName,omitempty"`
    Input *ActionExecutionInput `json:"input,omitempty"`
    LastUpdateTime *time.Time `json:"lastUpdateTime,omitempty"`
    Output *ActionExecutionOutput `json:"output,omitempty"`
    PipelineExecutionID *string `json:"pipelineExecutionId,omitempty"`
    PipelineVersion *int64 `json:"pipelineVersion,omitempty"`
    StageName *string `json:"stageName,omitempty"`
    StartTime *time.Time `json:"startTime,omitempty"`
    Status *ActionExecutionStatusEnum `json:"status,omitempty"`
    
}

