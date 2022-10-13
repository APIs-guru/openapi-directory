package operations

import (
	"openapi/pkg/models/shared"
)

type SetUICustomizationXAmzTargetEnum string

const (
	SetUICustomizationXAmzTargetEnumAwsCognitoIdentityProviderServiceSetUICustomization SetUICustomizationXAmzTargetEnum = "AWSCognitoIdentityProviderService.SetUICustomization"
)

type SetUICustomizationHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        SetUICustomizationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type SetUICustomizationRequest struct {
	Headers SetUICustomizationHeaders
	Request shared.SetUICustomizationRequest `request:"mediaType=application/json"`
}

type SetUICustomizationResponse struct {
	ContentType                string
	InternalErrorException     *interface{}
	InvalidParameterException  *interface{}
	NotAuthorizedException     *interface{}
	ResourceNotFoundException  *interface{}
	SetUICustomizationResponse *shared.SetUICustomizationResponse
	StatusCode                 int64
	TooManyRequestsException   *interface{}
}
