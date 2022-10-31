package operations

import (
	"openapi/pkg/models/shared"
)

type GetApplicationXAmzTargetEnum string

const (
	GetApplicationXAmzTargetEnumCodeDeploy20141006GetApplication GetApplicationXAmzTargetEnum = "CodeDeploy_20141006.GetApplication"
)

type GetApplicationHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetApplicationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
