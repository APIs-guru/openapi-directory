package operations

import (
	"openapi/pkg/models/shared"
)

type AddCustomAttributesXAmzTargetEnum string

const (
	AddCustomAttributesXAmzTargetEnumAwsCognitoIdentityProviderServiceAddCustomAttributes AddCustomAttributesXAmzTargetEnum = "AWSCognitoIdentityProviderService.AddCustomAttributes"
)

type AddCustomAttributesHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AddCustomAttributesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AddCustomAttributesRequest struct {
	Headers AddCustomAttributesHeaders
	Request shared.AddCustomAttributesRequest `request:"mediaType=application/json"`
}

type AddCustomAttributesResponse struct {
	AddCustomAttributesResponse   map[string]interface{}
	ContentType                   string
	InternalErrorException        *interface{}
	InvalidParameterException     *interface{}
	NotAuthorizedException        *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	TooManyRequestsException      *interface{}
	UserImportInProgressException *interface{}
}
