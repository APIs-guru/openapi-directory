package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeUserPoolDomainXAmzTargetEnum string

const (
	DescribeUserPoolDomainXAmzTargetEnumAwsCognitoIdentityProviderServiceDescribeUserPoolDomain DescribeUserPoolDomainXAmzTargetEnum = "AWSCognitoIdentityProviderService.DescribeUserPoolDomain"
)

type DescribeUserPoolDomainHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeUserPoolDomainXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeUserPoolDomainRequest struct {
	Headers DescribeUserPoolDomainHeaders
	Request shared.DescribeUserPoolDomainRequest `request:"mediaType=application/json"`
}

type DescribeUserPoolDomainResponse struct {
	ContentType                    string
	DescribeUserPoolDomainResponse *shared.DescribeUserPoolDomainResponse
	InternalErrorException         *interface{}
	InvalidParameterException      *interface{}
	NotAuthorizedException         *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
}
