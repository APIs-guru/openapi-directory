package operations

import (
	"openapi/pkg/models/shared"
)

type StopUserImportJobXAmzTargetEnum string

const (
	StopUserImportJobXAmzTargetEnumAwsCognitoIdentityProviderServiceStopUserImportJob StopUserImportJobXAmzTargetEnum = "AWSCognitoIdentityProviderService.StopUserImportJob"
)

type StopUserImportJobHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StopUserImportJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StopUserImportJobRequest struct {
	Headers StopUserImportJobHeaders
	Request shared.StopUserImportJobRequest `request:"mediaType=application/json"`
}

type StopUserImportJobResponse struct {
	ContentType                 string
	InternalErrorException      *interface{}
	InvalidParameterException   *interface{}
	NotAuthorizedException      *interface{}
	PreconditionNotMetException *interface{}
	ResourceNotFoundException   *interface{}
	StatusCode                  int64
	StopUserImportJobResponse   *shared.StopUserImportJobResponse
	TooManyRequestsException    *interface{}
}
