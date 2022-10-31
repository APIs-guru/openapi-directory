package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeRecommendationExportJobsXAmzTargetEnum string

const (
	DescribeRecommendationExportJobsXAmzTargetEnumComputeOptimizerServiceDescribeRecommendationExportJobs DescribeRecommendationExportJobsXAmzTargetEnum = "ComputeOptimizerService.DescribeRecommendationExportJobs"
)

type DescribeRecommendationExportJobsHeaders struct {
	XAmzAlgorithm     *string                                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeRecommendationExportJobsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeRecommendationExportJobsRequest struct {
	Headers DescribeRecommendationExportJobsHeaders
	Request shared.DescribeRecommendationExportJobsRequest `request:"mediaType=application/json"`
}

type DescribeRecommendationExportJobsResponse struct {
	AccessDeniedException                    *interface{}
	ContentType                              string
	DescribeRecommendationExportJobsResponse *shared.DescribeRecommendationExportJobsResponse
	InternalServerException                  *interface{}
	InvalidParameterValueException           *interface{}
	MissingAuthenticationToken               *interface{}
	OptInRequiredException                   *interface{}
	ResourceNotFoundException                *interface{}
	ServiceUnavailableException              *interface{}
	StatusCode                               int64
	ThrottlingException                      *interface{}
}
