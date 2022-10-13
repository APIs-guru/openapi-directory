package operations

import (
	"openapi/pkg/models/shared"
)

type StartBuildXAmzTargetEnum string

const (
	StartBuildXAmzTargetEnumCodeBuild20161006StartBuild StartBuildXAmzTargetEnum = "CodeBuild_20161006.StartBuild"
)

type StartBuildHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartBuildXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartBuildRequest struct {
	Headers StartBuildHeaders
	Request shared.StartBuildInput `request:"mediaType=application/json"`
}

type StartBuildResponse struct {
	AccountLimitExceededException *interface{}
	ContentType                   string
	InvalidInputException         *interface{}
	ResourceNotFoundException     *interface{}
	StartBuildOutput              *shared.StartBuildOutput
	StatusCode                    int64
}
