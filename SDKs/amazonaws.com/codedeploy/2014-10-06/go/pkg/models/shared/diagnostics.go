package shared

// Diagnostics
// Diagnostic information about executable scripts that are part of a deployment.
type Diagnostics struct {
	ErrorCode  *LifecycleErrorCodeEnum `json:"errorCode,omitempty"`
	LogTail    *string                 `json:"logTail,omitempty"`
	Message    *string                 `json:"message,omitempty"`
	ScriptName *string                 `json:"scriptName,omitempty"`
}
