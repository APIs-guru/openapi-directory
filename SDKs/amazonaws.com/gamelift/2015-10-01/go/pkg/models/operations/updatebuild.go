package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateBuildXAmzTargetEnum string

const (
	UpdateBuildXAmzTargetEnumGameLiftUpdateBuild UpdateBuildXAmzTargetEnum = "GameLift.UpdateBuild"
)

type UpdateBuildHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateBuildXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateBuildRequest struct {
	Headers UpdateBuildHeaders
	Request shared.UpdateBuildInput `request:"mediaType=application/json"`
}

type UpdateBuildResponse struct {
	ContentType              string
	InternalServiceException *interface{}
	InvalidRequestException  *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
	UnauthorizedException    *interface{}
	UpdateBuildOutput        *shared.UpdateBuildOutput
}
