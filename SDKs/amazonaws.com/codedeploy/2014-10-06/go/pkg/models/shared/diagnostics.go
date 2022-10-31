package shared



type Diagnostics struct {
    ErrorCode *LifecycleErrorCodeEnum `json:"errorCode,omitempty"`
    LogTail *string `json:"logTail,omitempty"`
    Message *string `json:"message,omitempty"`
    ScriptName *string `json:"scriptName,omitempty"`
    
}

