package operations

import (
	"openapi/pkg/models/shared"
)

type GetApplicationXAmzTargetEnum string

const (
	GetApplicationXAmzTargetEnumCodeDeploy20141006GetApplication GetApplicationXAmzTargetEnum = "CodeDeploy_20141006.GetApplication"
)

type GetApplicationHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetApplicationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetApplicationRequest struct {
	Headers GetApplicationHeaders
	Request shared.GetApplicationInput `request:"mediaType=application/json"`
}

type GetApplicationResponse struct {
	ApplicationDoesNotExistException *interface{}
	ApplicationNameRequiredException *interface{}
	ContentType                      string
	GetApplicationOutput             *shared.GetApplicationOutput
	InvalidApplicationNameException  *interface{}
	StatusCode                       int64
}
