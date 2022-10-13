package operations

import (
	"openapi/pkg/models/shared"
)

type StartMlLabelingSetGenerationTaskRunXAmzTargetEnum string

const (
	StartMlLabelingSetGenerationTaskRunXAmzTargetEnumAwsGlueStartMlLabelingSetGenerationTaskRun StartMlLabelingSetGenerationTaskRunXAmzTargetEnum = "AWSGlue.StartMLLabelingSetGenerationTaskRun"
)

type StartMlLabelingSetGenerationTaskRunHeaders struct {
	XAmzAlgorithm     *string                                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartMlLabelingSetGenerationTaskRunXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartMlLabelingSetGenerationTaskRunRequest struct {
	Headers StartMlLabelingSetGenerationTaskRunHeaders
	Request shared.StartMlLabelingSetGenerationTaskRunRequest `request:"mediaType=application/json"`
}

type StartMlLabelingSetGenerationTaskRunResponse struct {
	ConcurrentRunsExceededException             *interface{}
	ContentType                                 string
	EntityNotFoundException                     *interface{}
	InternalServiceException                    *interface{}
	InvalidInputException                       *interface{}
	OperationTimeoutException                   *interface{}
	StartMlLabelingSetGenerationTaskRunResponse *shared.StartMlLabelingSetGenerationTaskRunResponse
	StatusCode                                  int64
}
