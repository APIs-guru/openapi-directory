package shared

type ExecutionResultCodeEnum string

const (
	ExecutionResultCodeEnumParsingFailed          ExecutionResultCodeEnum = "PARSING_FAILED"
	ExecutionResultCodeEnumVpcEndpointSetupFailed ExecutionResultCodeEnum = "VPC_ENDPOINT_SETUP_FAILED"
)
