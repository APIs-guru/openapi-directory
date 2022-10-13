package operations

import (
	"openapi/pkg/models/shared"
)

type StopBuildBatchXAmzTargetEnum string

const (
	StopBuildBatchXAmzTargetEnumCodeBuild20161006StopBuildBatch StopBuildBatchXAmzTargetEnum = "CodeBuild_20161006.StopBuildBatch"
)

type StopBuildBatchHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StopBuildBatchXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StopBuildBatchRequest struct {
	Headers StopBuildBatchHeaders
	Request shared.StopBuildBatchInput `request:"mediaType=application/json"`
}

type StopBuildBatchResponse struct {
	ContentType               string
	InvalidInputException     *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	StopBuildBatchOutput      *shared.StopBuildBatchOutput
}
