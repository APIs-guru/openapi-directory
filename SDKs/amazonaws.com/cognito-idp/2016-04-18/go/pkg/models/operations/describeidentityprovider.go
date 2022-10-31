package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeIdentityProviderXAmzTargetEnum string

const (
	DescribeIdentityProviderXAmzTargetEnumAwsCognitoIdentityProviderServiceDescribeIdentityProvider DescribeIdentityProviderXAmzTargetEnum = "AWSCognitoIdentityProviderService.DescribeIdentityProvider"
)

type DescribeIdentityProviderHeaders struct {
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeIdentityProviderXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
