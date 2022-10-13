package operations

import (
	"openapi/pkg/models/shared"
)

type GetEc2RecommendationProjectedMetricsXAmzTargetEnum string

const (
	GetEc2RecommendationProjectedMetricsXAmzTargetEnumComputeOptimizerServiceGetEc2RecommendationProjectedMetrics GetEc2RecommendationProjectedMetricsXAmzTargetEnum = "ComputeOptimizerService.GetEC2RecommendationProjectedMetrics"
)

type GetEc2RecommendationProjectedMetricsHeaders struct {
	XAmzAlgorithm     *string                                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetEc2RecommendationProjectedMetricsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetEc2RecommendationProjectedMetricsRequest struct {
	Headers GetEc2RecommendationProjectedMetricsHeaders
	Request shared.GetEc2RecommendationProjectedMetricsRequest `request:"mediaType=application/json"`
}

type GetEc2RecommendationProjectedMetricsResponse struct {
	AccessDeniedException                        *interface{}
	ContentType                                  string
	GetEc2RecommendationProjectedMetricsResponse *shared.GetEc2RecommendationProjectedMetricsResponse
	InternalServerException                      *interface{}
	InvalidParameterValueException               *interface{}
	MissingAuthenticationToken                   *interface{}
	OptInRequiredException                       *interface{}
	ResourceNotFoundException                    *interface{}
	ServiceUnavailableException                  *interface{}
	StatusCode                                   int64
	ThrottlingException                          *interface{}
}
