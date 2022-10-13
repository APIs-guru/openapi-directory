package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteBuildBatchXAmzTargetEnum string

const (
	DeleteBuildBatchXAmzTargetEnumCodeBuild20161006DeleteBuildBatch DeleteBuildBatchXAmzTargetEnum = "CodeBuild_20161006.DeleteBuildBatch"
)

type DeleteBuildBatchHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteBuildBatchXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteBuildBatchRequest struct {
	Headers DeleteBuildBatchHeaders
	Request shared.DeleteBuildBatchInput `request:"mediaType=application/json"`
}

type DeleteBuildBatchResponse struct {
	ContentType            string
	DeleteBuildBatchOutput *shared.DeleteBuildBatchOutput
	InvalidInputException  *interface{}
	StatusCode             int64
}
