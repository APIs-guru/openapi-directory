package operations

import (
	"openapi/pkg/models/shared"
)

type StopBuildXAmzTargetEnum string

const (
	StopBuildXAmzTargetEnumCodeBuild20161006StopBuild StopBuildXAmzTargetEnum = "CodeBuild_20161006.StopBuild"
)

type StopBuildHeaders struct {
	XAmzAlgorithm     *string                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StopBuildXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StopBuildRequest struct {
	Headers StopBuildHeaders
	Request shared.StopBuildInput `request:"mediaType=application/json"`
}

type StopBuildResponse struct {
	ContentType               string
	InvalidInputException     *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	StopBuildOutput           *shared.StopBuildOutput
}
