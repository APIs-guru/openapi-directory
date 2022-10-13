package operations

import (
	"openapi/pkg/models/shared"
)

type CreateBuildXAmzTargetEnum string

const (
	CreateBuildXAmzTargetEnumGameLiftCreateBuild CreateBuildXAmzTargetEnum = "GameLift.CreateBuild"
)

type CreateBuildHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateBuildXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateBuildRequest struct {
	Headers CreateBuildHeaders
	Request shared.CreateBuildInput `request:"mediaType=application/json"`
}

type CreateBuildResponse struct {
	ConflictException        *interface{}
	ContentType              string
	CreateBuildOutput        *shared.CreateBuildOutput
	InternalServiceException *interface{}
	InvalidRequestException  *interface{}
	StatusCode               int64
	TaggingFailedException   *interface{}
	UnauthorizedException    *interface{}
}
