package shared

type EnableIoTLoggingParams struct {
	LogLevel          LogLevelEnum `json:"logLevel"`
	RoleArnForLogging string       `json:"roleArnForLogging"`
}
