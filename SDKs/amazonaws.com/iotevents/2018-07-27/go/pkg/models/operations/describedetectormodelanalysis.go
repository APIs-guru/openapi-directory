package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDetectorModelAnalysisPathParams struct {
	AnalysisID string `pathParam:"style=simple,explode=false,name=analysisId"`
}

type DescribeDetectorModelAnalysisHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeDetectorModelAnalysisRequest struct {
	PathParams DescribeDetectorModelAnalysisPathParams
	Headers    DescribeDetectorModelAnalysisHeaders
}

type DescribeDetectorModelAnalysisResponse struct {
	ContentType                           string
	DescribeDetectorModelAnalysisResponse *shared.DescribeDetectorModelAnalysisResponse
	InternalFailureException              *interface{}
	InvalidRequestException               *interface{}
	ResourceNotFoundException             *interface{}
	ServiceUnavailableException           *interface{}
	StatusCode                            int64
	ThrottlingException                   *interface{}
}
