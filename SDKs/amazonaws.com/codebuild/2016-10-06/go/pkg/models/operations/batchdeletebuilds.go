package operations

import (
	"openapi/pkg/models/shared"
)

type BatchDeleteBuildsXAmzTargetEnum string

const (
	BatchDeleteBuildsXAmzTargetEnumCodeBuild20161006BatchDeleteBuilds BatchDeleteBuildsXAmzTargetEnum = "CodeBuild_20161006.BatchDeleteBuilds"
)

type BatchDeleteBuildsHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchDeleteBuildsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type BatchDeleteBuildsRequest struct {
	Headers BatchDeleteBuildsHeaders
	Request shared.BatchDeleteBuildsInput `request:"mediaType=application/json"`
}

type BatchDeleteBuildsResponse struct {
	BatchDeleteBuildsOutput *shared.BatchDeleteBuildsOutput
	ContentType             string
	InvalidInputException   *interface{}
	StatusCode              int64
}
