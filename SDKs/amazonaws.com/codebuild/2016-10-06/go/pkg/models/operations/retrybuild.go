package operations

import (
	"openapi/pkg/models/shared"
)

type RetryBuildXAmzTargetEnum string

const (
	RetryBuildXAmzTargetEnumCodeBuild20161006RetryBuild RetryBuildXAmzTargetEnum = "CodeBuild_20161006.RetryBuild"
)

type RetryBuildHeaders struct {
	XAmzAlgorithm     *string                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        RetryBuildXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
