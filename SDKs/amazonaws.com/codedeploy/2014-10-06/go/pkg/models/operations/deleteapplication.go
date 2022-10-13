package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteApplicationXAmzTargetEnum string

const (
	DeleteApplicationXAmzTargetEnumCodeDeploy20141006DeleteApplication DeleteApplicationXAmzTargetEnum = "CodeDeploy_20141006.DeleteApplication"
)

type DeleteApplicationHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteApplicationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteApplicationRequest struct {
	Headers DeleteApplicationHeaders
	Request shared.DeleteApplicationInput `request:"mediaType=application/json"`
}

type DeleteApplicationResponse struct {
	ApplicationNameRequiredException *interface{}
	ContentType                      string
	InvalidApplicationNameException  *interface{}
	InvalidRoleException             *interface{}
	StatusCode                       int64
}
