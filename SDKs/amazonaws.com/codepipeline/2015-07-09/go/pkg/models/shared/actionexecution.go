package shared

import (
"time")

type ActionExecution struct {
    ActionExecutionID *string `json:"actionExecutionId,omitempty"`
    ErrorDetails *ErrorDetails `json:"errorDetails,omitempty"`
    ExternalExecutionID *string `json:"externalExecutionId,omitempty"`
    ExternalExecutionURL *string `json:"externalExecutionUrl,omitempty"`
    LastStatusChange *time.Time `json:"lastStatusChange,omitempty"`
    LastUpdatedBy *string `json:"lastUpdatedBy,omitempty"`
    PercentComplete *int64 `json:"percentComplete,omitempty"`
    Status *ActionExecutionStatusEnum `json:"status,omitempty"`
    Summary *string `json:"summary,omitempty"`
    Token *string `json:"token,omitempty"`
    
}

