package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeResourceServerXAmzTargetEnum string

const (
	DescribeResourceServerXAmzTargetEnumAwsCognitoIdentityProviderServiceDescribeResourceServer DescribeResourceServerXAmzTargetEnum = "AWSCognitoIdentityProviderService.DescribeResourceServer"
)

type DescribeResourceServerHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeResourceServerXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeResourceServerRequest struct {
	Headers DescribeResourceServerHeaders
	Request shared.DescribeResourceServerRequest `request:"mediaType=application/json"`
}

type DescribeResourceServerResponse struct {
	ContentType                    string
	DescribeResourceServerResponse *shared.DescribeResourceServerResponse
	InternalErrorException         *interface{}
	InvalidParameterException      *interface{}
	NotAuthorizedException         *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	TooManyRequestsException       *interface{}
}
