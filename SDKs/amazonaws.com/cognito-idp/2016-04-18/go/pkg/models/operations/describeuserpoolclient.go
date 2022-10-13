package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeUserPoolClientXAmzTargetEnum string

const (
	DescribeUserPoolClientXAmzTargetEnumAwsCognitoIdentityProviderServiceDescribeUserPoolClient DescribeUserPoolClientXAmzTargetEnum = "AWSCognitoIdentityProviderService.DescribeUserPoolClient"
)

type DescribeUserPoolClientHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeUserPoolClientXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeUserPoolClientRequest struct {
	Headers DescribeUserPoolClientHeaders
	Request shared.DescribeUserPoolClientRequest `request:"mediaType=application/json"`
}

type DescribeUserPoolClientResponse struct {
	ContentType                    string
	DescribeUserPoolClientResponse *shared.DescribeUserPoolClientResponse
	InternalErrorException         *interface{}
	InvalidParameterException      *interface{}
	NotAuthorizedException         *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	TooManyRequestsException       *interface{}
}
