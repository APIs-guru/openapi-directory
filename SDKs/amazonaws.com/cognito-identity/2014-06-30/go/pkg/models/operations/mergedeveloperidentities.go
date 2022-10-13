package operations

import (
	"openapi/pkg/models/shared"
)

type MergeDeveloperIdentitiesXAmzTargetEnum string

const (
	MergeDeveloperIdentitiesXAmzTargetEnumAwsCognitoIdentityServiceMergeDeveloperIdentities MergeDeveloperIdentitiesXAmzTargetEnum = "AWSCognitoIdentityService.MergeDeveloperIdentities"
)

type MergeDeveloperIdentitiesHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        MergeDeveloperIdentitiesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type MergeDeveloperIdentitiesRequest struct {
	Headers MergeDeveloperIdentitiesHeaders
	Request shared.MergeDeveloperIdentitiesInput `request:"mediaType=application/json"`
}

type MergeDeveloperIdentitiesResponse struct {
	ContentType                      string
	InternalErrorException           *interface{}
	InvalidParameterException        *interface{}
	MergeDeveloperIdentitiesResponse *shared.MergeDeveloperIdentitiesResponse
	NotAuthorizedException           *interface{}
	ResourceConflictException        *interface{}
	ResourceNotFoundException        *interface{}
	StatusCode                       int64
	TooManyRequestsException         *interface{}
}
