package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeIdentityPoolXAmzTargetEnum string

const (
	DescribeIdentityPoolXAmzTargetEnumAwsCognitoIdentityServiceDescribeIdentityPool DescribeIdentityPoolXAmzTargetEnum = "AWSCognitoIdentityService.DescribeIdentityPool"
)

type DescribeIdentityPoolHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeIdentityPoolXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
