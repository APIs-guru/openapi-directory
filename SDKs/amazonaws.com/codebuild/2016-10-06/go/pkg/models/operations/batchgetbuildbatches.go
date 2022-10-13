package operations

import (
	"openapi/pkg/models/shared"
)

type BatchGetBuildBatchesXAmzTargetEnum string

const (
	BatchGetBuildBatchesXAmzTargetEnumCodeBuild20161006BatchGetBuildBatches BatchGetBuildBatchesXAmzTargetEnum = "CodeBuild_20161006.BatchGetBuildBatches"
)

type BatchGetBuildBatchesHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchGetBuildBatchesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type BatchGetBuildBatchesRequest struct {
	Headers BatchGetBuildBatchesHeaders
	Request shared.BatchGetBuildBatchesInput `request:"mediaType=application/json"`
}

type BatchGetBuildBatchesResponse struct {
	BatchGetBuildBatchesOutput *shared.BatchGetBuildBatchesOutput
	ContentType                string
	InvalidInputException      *interface{}
	StatusCode                 int64
}
