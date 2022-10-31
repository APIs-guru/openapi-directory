package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeIdentityXAmzTargetEnum string

const (
	DescribeIdentityXAmzTargetEnumAwsCognitoIdentityServiceDescribeIdentity DescribeIdentityXAmzTargetEnum = "AWSCognitoIdentityService.DescribeIdentity"
)

type DescribeIdentityHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeIdentityXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeIdentityRequest struct {
	Headers DescribeIdentityHeaders
	Request shared.DescribeIdentityInput `request:"mediaType=application/json"`
}

type DescribeIdentityResponse struct {
	ContentType               string
	IdentityDescription       *shared.IdentityDescription
	InternalErrorException    *interface{}
	InvalidParameterException *interface{}
	NotAuthorizedException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	TooManyRequestsException  *interface{}
}
