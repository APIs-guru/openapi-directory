package operations

import (
	"openapi/pkg/models/shared"
)

type CreateUserImportJobXAmzTargetEnum string

const (
	CreateUserImportJobXAmzTargetEnumAwsCognitoIdentityProviderServiceCreateUserImportJob CreateUserImportJobXAmzTargetEnum = "AWSCognitoIdentityProviderService.CreateUserImportJob"
)

type CreateUserImportJobHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateUserImportJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateUserImportJobRequest struct {
	Headers CreateUserImportJobHeaders
	Request shared.CreateUserImportJobRequest `request:"mediaType=application/json"`
}

type CreateUserImportJobResponse struct {
	ContentType                 string
	CreateUserImportJobResponse *shared.CreateUserImportJobResponse
	InternalErrorException      *interface{}
	InvalidParameterException   *interface{}
	LimitExceededException      *interface{}
	NotAuthorizedException      *interface{}
	PreconditionNotMetException *interface{}
	ResourceNotFoundException   *interface{}
	StatusCode                  int64
	TooManyRequestsException    *interface{}
}
