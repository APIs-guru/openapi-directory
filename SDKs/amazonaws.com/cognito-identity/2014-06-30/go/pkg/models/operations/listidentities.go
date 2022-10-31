package operations

import (
	"openapi/pkg/models/shared"
)

type ListIdentitiesXAmzTargetEnum string

const (
	ListIdentitiesXAmzTargetEnumAwsCognitoIdentityServiceListIdentities ListIdentitiesXAmzTargetEnum = "AWSCognitoIdentityService.ListIdentities"
)

type ListIdentitiesHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListIdentitiesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListIdentitiesRequest struct {
	Headers ListIdentitiesHeaders
	Request shared.ListIdentitiesInput `request:"mediaType=application/json"`
}

type ListIdentitiesResponse struct {
	ContentType               string
	InternalErrorException    *interface{}
	InvalidParameterException *interface{}
	ListIdentitiesResponse    *shared.ListIdentitiesResponse
	NotAuthorizedException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	TooManyRequestsException  *interface{}
}
