package operations

import (
	"openapi/pkg/models/shared"
)

type StartImportLabelsTaskRunXAmzTargetEnum string

const (
	StartImportLabelsTaskRunXAmzTargetEnumAwsGlueStartImportLabelsTaskRun StartImportLabelsTaskRunXAmzTargetEnum = "AWSGlue.StartImportLabelsTaskRun"
)

type StartImportLabelsTaskRunHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartImportLabelsTaskRunXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartImportLabelsTaskRunRequest struct {
	Headers StartImportLabelsTaskRunHeaders
	Request shared.StartImportLabelsTaskRunRequest `request:"mediaType=application/json"`
}

type StartImportLabelsTaskRunResponse struct {
	ContentType                          string
	EntityNotFoundException              *interface{}
	InternalServiceException             *interface{}
	InvalidInputException                *interface{}
	OperationTimeoutException            *interface{}
	ResourceNumberLimitExceededException *interface{}
	StartImportLabelsTaskRunResponse     *shared.StartImportLabelsTaskRunResponse
	StatusCode                           int64
}
