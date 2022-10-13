package operations

import (
	"openapi/pkg/models/shared"
)

type RetryBuildBatchXAmzTargetEnum string

const (
	RetryBuildBatchXAmzTargetEnumCodeBuild20161006RetryBuildBatch RetryBuildBatchXAmzTargetEnum = "CodeBuild_20161006.RetryBuildBatch"
)

type RetryBuildBatchHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RetryBuildBatchXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RetryBuildBatchRequest struct {
	Headers RetryBuildBatchHeaders
	Request shared.RetryBuildBatchInput `request:"mediaType=application/json"`
}

type RetryBuildBatchResponse struct {
	ContentType               string
	InvalidInputException     *interface{}
	ResourceNotFoundException *interface{}
	RetryBuildBatchOutput     *shared.RetryBuildBatchOutput
	StatusCode                int64
}
