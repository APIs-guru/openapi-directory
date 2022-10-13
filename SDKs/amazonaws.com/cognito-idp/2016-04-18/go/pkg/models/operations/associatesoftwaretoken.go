package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateSoftwareTokenXAmzTargetEnum string

const (
	AssociateSoftwareTokenXAmzTargetEnumAwsCognitoIdentityProviderServiceAssociateSoftwareToken AssociateSoftwareTokenXAmzTargetEnum = "AWSCognitoIdentityProviderService.AssociateSoftwareToken"
)

type AssociateSoftwareTokenHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AssociateSoftwareTokenXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AssociateSoftwareTokenRequest struct {
	Headers AssociateSoftwareTokenHeaders
	Request shared.AssociateSoftwareTokenRequest `request:"mediaType=application/json"`
}

type AssociateSoftwareTokenResponse struct {
	AssociateSoftwareTokenResponse    *shared.AssociateSoftwareTokenResponse
	ConcurrentModificationException   *interface{}
	ContentType                       string
	InternalErrorException            *interface{}
	InvalidParameterException         *interface{}
	NotAuthorizedException            *interface{}
	ResourceNotFoundException         *interface{}
	SoftwareTokenMfaNotFoundException *interface{}
	StatusCode                        int64
}
