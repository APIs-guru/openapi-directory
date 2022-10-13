package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeRxNormInferenceJobXAmzTargetEnum string

const (
	DescribeRxNormInferenceJobXAmzTargetEnumComprehendMedical20181030DescribeRxNormInferenceJob DescribeRxNormInferenceJobXAmzTargetEnum = "ComprehendMedical_20181030.DescribeRxNormInferenceJob"
)

type DescribeRxNormInferenceJobHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeRxNormInferenceJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeRxNormInferenceJobRequest struct {
	Headers DescribeRxNormInferenceJobHeaders
	Request shared.DescribeRxNormInferenceJobRequest `request:"mediaType=application/json"`
}

type DescribeRxNormInferenceJobResponse struct {
	ContentType                        string
	DescribeRxNormInferenceJobResponse *shared.DescribeRxNormInferenceJobResponse
	InternalServerException            *interface{}
	InvalidRequestException            *interface{}
	ResourceNotFoundException          *interface{}
	StatusCode                         int64
	TooManyRequestsException           *interface{}
}
