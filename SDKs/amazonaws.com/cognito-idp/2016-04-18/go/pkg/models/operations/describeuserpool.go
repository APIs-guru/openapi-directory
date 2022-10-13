package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeUserPoolXAmzTargetEnum string

const (
	DescribeUserPoolXAmzTargetEnumAwsCognitoIdentityProviderServiceDescribeUserPool DescribeUserPoolXAmzTargetEnum = "AWSCognitoIdentityProviderService.DescribeUserPool"
)

type DescribeUserPoolHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeUserPoolXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeUserPoolRequest struct {
	Headers DescribeUserPoolHeaders
	Request shared.DescribeUserPoolRequest `request:"mediaType=application/json"`
}

type DescribeUserPoolResponse struct {
	ContentType               string
	DescribeUserPoolResponse  *shared.DescribeUserPoolResponse
	InternalErrorException    *interface{}
	InvalidParameterException *interface{}
	NotAuthorizedException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	TooManyRequestsException  *interface{}
	UserPoolTaggingException  *interface{}
}
