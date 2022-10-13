package operations

import (
	"openapi/pkg/models/shared"
)

type GetApplicationRevisionXAmzTargetEnum string

const (
	GetApplicationRevisionXAmzTargetEnumCodeDeploy20141006GetApplicationRevision GetApplicationRevisionXAmzTargetEnum = "CodeDeploy_20141006.GetApplicationRevision"
)

type GetApplicationRevisionHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetApplicationRevisionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetApplicationRevisionRequest struct {
	Headers GetApplicationRevisionHeaders
	Request shared.GetApplicationRevisionInput `request:"mediaType=application/json"`
}

type GetApplicationRevisionResponse struct {
	ApplicationDoesNotExistException *interface{}
	ApplicationNameRequiredException *interface{}
	ContentType                      string
	GetApplicationRevisionOutput     *shared.GetApplicationRevisionOutput
	InvalidApplicationNameException  *interface{}
	InvalidRevisionException         *interface{}
	RevisionDoesNotExistException    *interface{}
	RevisionRequiredException        *interface{}
	StatusCode                       int64
}
