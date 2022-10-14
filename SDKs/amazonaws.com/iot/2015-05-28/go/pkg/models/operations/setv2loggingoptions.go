package operations

type SetV2LoggingOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type SetV2LoggingOptionsRequestBodyDefaultLogLevelEnum string

const (
	SetV2LoggingOptionsRequestBodyDefaultLogLevelEnumDebug    SetV2LoggingOptionsRequestBodyDefaultLogLevelEnum = "DEBUG"
	SetV2LoggingOptionsRequestBodyDefaultLogLevelEnumInfo     SetV2LoggingOptionsRequestBodyDefaultLogLevelEnum = "INFO"
	SetV2LoggingOptionsRequestBodyDefaultLogLevelEnumError    SetV2LoggingOptionsRequestBodyDefaultLogLevelEnum = "ERROR"
	SetV2LoggingOptionsRequestBodyDefaultLogLevelEnumWarn     SetV2LoggingOptionsRequestBodyDefaultLogLevelEnum = "WARN"
	SetV2LoggingOptionsRequestBodyDefaultLogLevelEnumDisabled SetV2LoggingOptionsRequestBodyDefaultLogLevelEnum = "DISABLED"
)

type SetV2LoggingOptionsRequestBody struct {
	DefaultLogLevel *SetV2LoggingOptionsRequestBodyDefaultLogLevelEnum `json:"defaultLogLevel,omitempty"`
	DisableAllLogs  *bool                                              `json:"disableAllLogs,omitempty"`
	RoleArn         *string                                            `json:"roleArn,omitempty"`
}

type SetV2LoggingOptionsRequest struct {
	Headers SetV2LoggingOptionsHeaders
	Request SetV2LoggingOptionsRequestBody `request:"mediaType=application/json"`
}

type SetV2LoggingOptionsResponse struct {
	ContentType                 string
	InternalException           *interface{}
	InvalidRequestException     *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
}
