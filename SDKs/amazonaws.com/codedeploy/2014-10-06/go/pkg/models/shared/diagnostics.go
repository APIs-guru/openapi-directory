package shared

type Diagnostics struct {
	ErrorCode  *LifecycleErrorCodeEnum `json:"errorCode"`
	LogTail    *string                 `json:"logTail"`
	Message    *string                 `json:"message"`
	ScriptName *string                 `json:"scriptName"`
}
