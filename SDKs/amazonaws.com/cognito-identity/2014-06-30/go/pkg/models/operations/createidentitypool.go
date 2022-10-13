package operations

import (
	"openapi/pkg/models/shared"
)

type CreateIdentityPoolXAmzTargetEnum string

const (
	CreateIdentityPoolXAmzTargetEnumAwsCognitoIdentityServiceCreateIdentityPool CreateIdentityPoolXAmzTargetEnum = "AWSCognitoIdentityService.CreateIdentityPool"
)

type CreateIdentityPoolHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateIdentityPoolXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateIdentityPoolRequest struct {
	Headers CreateIdentityPoolHeaders
	Request shared.CreateIdentityPoolInput `request:"mediaType=application/json"`
}

type CreateIdentityPoolResponse struct {
	ContentType               string
	IdentityPool              *shared.IdentityPool
	InternalErrorException    *interface{}
	InvalidParameterException *interface{}
	LimitExceededException    *interface{}
	NotAuthorizedException    *interface{}
	ResourceConflictException *interface{}
	StatusCode                int64
	TooManyRequestsException  *interface{}
}
