package shared

// FunctionRunAsConfig
// Specifies the user and group whose permissions are used when running the Lambda function. You can specify one or both values to override the default values. We recommend that you avoid running as root unless absolutely necessary to minimize the risk of unintended changes or malicious attacks. To run as root, you must set ”IsolationMode” to ”NoContainer” and update config.json in ”greengrass-root/config” to set ”allowFunctionsToRunAsRoot” to ”yes”.
type FunctionRunAsConfig struct {
	Gid *int64 `json:"Gid,omitempty"`
	UID *int64 `json:"Uid,omitempty"`
}
