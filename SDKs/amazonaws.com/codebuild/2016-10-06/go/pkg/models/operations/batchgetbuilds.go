package operations

import (
	"openapi/pkg/models/shared"
)

type BatchGetBuildsXAmzTargetEnum string

const (
	BatchGetBuildsXAmzTargetEnumCodeBuild20161006BatchGetBuilds BatchGetBuildsXAmzTargetEnum = "CodeBuild_20161006.BatchGetBuilds"
)

type BatchGetBuildsHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchGetBuildsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type BatchGetBuildsRequest struct {
	Headers BatchGetBuildsHeaders
	Request shared.BatchGetBuildsInput `request:"mediaType=application/json"`
}

type BatchGetBuildsResponse struct {
	BatchGetBuildsOutput  *shared.BatchGetBuildsOutput
	ContentType           string
	InvalidInputException *interface{}
	StatusCode            int64
}
