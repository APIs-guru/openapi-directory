package operations

import (
	"openapi/pkg/models/shared"
)

type RetryBuildXAmzTargetEnum string

const (
	RetryBuildXAmzTargetEnumCodeBuild20161006RetryBuild RetryBuildXAmzTargetEnum = "CodeBuild_20161006.RetryBuild"
)

type RetryBuildHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RetryBuildXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RetryBuildRequest struct {
	Headers RetryBuildHeaders
	Request shared.RetryBuildInput `request:"mediaType=application/json"`
}

type RetryBuildResponse struct {
	AccountLimitExceededException *interface{}
	ContentType                   string
	InvalidInputException         *interface{}
	ResourceNotFoundException     *interface{}
	RetryBuildOutput              *shared.RetryBuildOutput
	StatusCode                    int64
}
