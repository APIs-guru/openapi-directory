package operations

import (
	"openapi/pkg/models/shared"
)

type ListUserImportJobsXAmzTargetEnum string

const (
	ListUserImportJobsXAmzTargetEnumAwsCognitoIdentityProviderServiceListUserImportJobs ListUserImportJobsXAmzTargetEnum = "AWSCognitoIdentityProviderService.ListUserImportJobs"
)

type ListUserImportJobsHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListUserImportJobsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListUserImportJobsRequest struct {
	Headers ListUserImportJobsHeaders
	Request shared.ListUserImportJobsRequest `request:"mediaType=application/json"`
}

type ListUserImportJobsResponse struct {
	ContentType                string
	InternalErrorException     *interface{}
	InvalidParameterException  *interface{}
	ListUserImportJobsResponse *shared.ListUserImportJobsResponse
	NotAuthorizedException     *interface{}
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
	TooManyRequestsException   *interface{}
}
