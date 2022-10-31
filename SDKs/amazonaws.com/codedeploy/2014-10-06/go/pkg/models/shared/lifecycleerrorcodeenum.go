package shared

type LifecycleErrorCodeEnum string

const (
	LifecycleErrorCodeEnumSuccess             LifecycleErrorCodeEnum = "Success"
	LifecycleErrorCodeEnumScriptMissing       LifecycleErrorCodeEnum = "ScriptMissing"
	LifecycleErrorCodeEnumScriptNotExecutable LifecycleErrorCodeEnum = "ScriptNotExecutable"
	LifecycleErrorCodeEnumScriptTimedOut      LifecycleErrorCodeEnum = "ScriptTimedOut"
	LifecycleErrorCodeEnumScriptFailed        LifecycleErrorCodeEnum = "ScriptFailed"
	LifecycleErrorCodeEnumUnknownError        LifecycleErrorCodeEnum = "UnknownError"
)
