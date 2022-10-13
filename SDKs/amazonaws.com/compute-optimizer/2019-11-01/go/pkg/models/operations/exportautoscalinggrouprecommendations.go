package operations

import (
	"openapi/pkg/models/shared"
)

type ExportAutoScalingGroupRecommendationsXAmzTargetEnum string

const (
	ExportAutoScalingGroupRecommendationsXAmzTargetEnumComputeOptimizerServiceExportAutoScalingGroupRecommendations ExportAutoScalingGroupRecommendationsXAmzTargetEnum = "ComputeOptimizerService.ExportAutoScalingGroupRecommendations"
)

type ExportAutoScalingGroupRecommendationsHeaders struct {
	XAmzAlgorithm     *string                                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ExportAutoScalingGroupRecommendationsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ExportAutoScalingGroupRecommendationsRequest struct {
	Headers ExportAutoScalingGroupRecommendationsHeaders
	Request shared.ExportAutoScalingGroupRecommendationsRequest `request:"mediaType=application/json"`
}

type ExportAutoScalingGroupRecommendationsResponse struct {
	AccessDeniedException                         *interface{}
	ContentType                                   string
	ExportAutoScalingGroupRecommendationsResponse *shared.ExportAutoScalingGroupRecommendationsResponse
	InternalServerException                       *interface{}
	InvalidParameterValueException                *interface{}
	LimitExceededException                        *interface{}
	MissingAuthenticationToken                    *interface{}
	OptInRequiredException                        *interface{}
	ServiceUnavailableException                   *interface{}
	StatusCode                                    int64
	ThrottlingException                           *interface{}
}
