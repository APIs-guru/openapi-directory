package operations

import (
	"openapi/pkg/models/shared"
)

type ListRxNormInferenceJobsXAmzTargetEnum string

const (
	ListRxNormInferenceJobsXAmzTargetEnumComprehendMedical20181030ListRxNormInferenceJobs ListRxNormInferenceJobsXAmzTargetEnum = "ComprehendMedical_20181030.ListRxNormInferenceJobs"
)

type ListRxNormInferenceJobsHeaders struct {
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListRxNormInferenceJobsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListRxNormInferenceJobsRequest struct {
	Headers ListRxNormInferenceJobsHeaders
	Request shared.ListRxNormInferenceJobsRequest `request:"mediaType=application/json"`
}

type ListRxNormInferenceJobsResponse struct {
	ContentType                     string
	InternalServerException         *interface{}
	InvalidRequestException         *interface{}
	ListRxNormInferenceJobsResponse *shared.ListRxNormInferenceJobsResponse
	StatusCode                      int64
	TooManyRequestsException        *interface{}
	ValidationException             *interface{}
}
