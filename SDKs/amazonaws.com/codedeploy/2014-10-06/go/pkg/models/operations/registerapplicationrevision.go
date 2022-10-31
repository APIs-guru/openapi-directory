package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterApplicationRevisionXAmzTargetEnum string

const (
	RegisterApplicationRevisionXAmzTargetEnumCodeDeploy20141006RegisterApplicationRevision RegisterApplicationRevisionXAmzTargetEnum = "CodeDeploy_20141006.RegisterApplicationRevision"
)

type RegisterApplicationRevisionHeaders struct {
	XAmzAlgorithm     *string                                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        RegisterApplicationRevisionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type RegisterApplicationRevisionRequest struct {
	Headers RegisterApplicationRevisionHeaders
	Request shared.RegisterApplicationRevisionInput `request:"mediaType=application/json"`
}

type RegisterApplicationRevisionResponse struct {
	ApplicationDoesNotExistException *interface{}
	ApplicationNameRequiredException *interface{}
	ContentType                      string
	DescriptionTooLongException      *interface{}
	InvalidApplicationNameException  *interface{}
	InvalidRevisionException         *interface{}
	RevisionRequiredException        *interface{}
	StatusCode                       int64
}
