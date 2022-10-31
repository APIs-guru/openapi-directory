package operations

import (
	"openapi/pkg/models/shared"
)

type ListUserImportJobsXAmzTargetEnum string

const (
	ListUserImportJobsXAmzTargetEnumAwsCognitoIdentityProviderServiceListUserImportJobs ListUserImportJobsXAmzTargetEnum = "AWSCognitoIdentityProviderService.ListUserImportJobs"
)

type ListUserImportJobsHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListUserImportJobsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
