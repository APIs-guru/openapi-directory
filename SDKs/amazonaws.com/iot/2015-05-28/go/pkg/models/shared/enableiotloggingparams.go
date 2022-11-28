package shared

// EnableIoTLoggingParams
// Parameters used when defining a mitigation action that enable Amazon Web Services IoT Core logging.
type EnableIoTLoggingParams struct {
	LogLevel          LogLevelEnum `json:"logLevel"`
	RoleArnForLogging string       `json:"roleArnForLogging"`
}
