package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeIdentityPoolXAmzTargetEnum string

const (
	DescribeIdentityPoolXAmzTargetEnumAwsCognitoIdentityServiceDescribeIdentityPool DescribeIdentityPoolXAmzTargetEnum = "AWSCognitoIdentityService.DescribeIdentityPool"
)

type DescribeIdentityPoolHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeIdentityPoolXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeIdentityPoolRequest struct {
	Headers DescribeIdentityPoolHeaders
	Request shared.DescribeIdentityPoolInput `request:"mediaType=application/json"`
}

type DescribeIdentityPoolResponse struct {
	ContentType               string
	IdentityPool              *shared.IdentityPool
	InternalErrorException    *interface{}
	InvalidParameterException *interface{}
	NotAuthorizedException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	TooManyRequestsException  *interface{}
}
