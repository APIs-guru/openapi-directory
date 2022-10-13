package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeIdentityProviderXAmzTargetEnum string

const (
	DescribeIdentityProviderXAmzTargetEnumAwsCognitoIdentityProviderServiceDescribeIdentityProvider DescribeIdentityProviderXAmzTargetEnum = "AWSCognitoIdentityProviderService.DescribeIdentityProvider"
)

type DescribeIdentityProviderHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeIdentityProviderXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeIdentityProviderRequest struct {
	Headers DescribeIdentityProviderHeaders
	Request shared.DescribeIdentityProviderRequest `request:"mediaType=application/json"`
}

type DescribeIdentityProviderResponse struct {
	ContentType                      string
	DescribeIdentityProviderResponse *shared.DescribeIdentityProviderResponse
	InternalErrorException           *interface{}
	InvalidParameterException        *interface{}
	NotAuthorizedException           *interface{}
	ResourceNotFoundException        *interface{}
	StatusCode                       int64
	TooManyRequestsException         *interface{}
}
