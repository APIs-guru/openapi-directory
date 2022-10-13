package operations

import (
	"openapi/pkg/models/shared"
)

type GetEc2InstanceRecommendationsXAmzTargetEnum string

const (
	GetEc2InstanceRecommendationsXAmzTargetEnumComputeOptimizerServiceGetEc2InstanceRecommendations GetEc2InstanceRecommendationsXAmzTargetEnum = "ComputeOptimizerService.GetEC2InstanceRecommendations"
)

type GetEc2InstanceRecommendationsHeaders struct {
	XAmzAlgorithm     *string                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetEc2InstanceRecommendationsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetEc2InstanceRecommendationsRequest struct {
	Headers GetEc2InstanceRecommendationsHeaders
	Request shared.GetEc2InstanceRecommendationsRequest `request:"mediaType=application/json"`
}

type GetEc2InstanceRecommendationsResponse struct {
	AccessDeniedException                 *interface{}
	ContentType                           string
	GetEc2InstanceRecommendationsResponse *shared.GetEc2InstanceRecommendationsResponse
	InternalServerException               *interface{}
	InvalidParameterValueException        *interface{}
	MissingAuthenticationToken            *interface{}
	OptInRequiredException                *interface{}
	ResourceNotFoundException             *interface{}
	ServiceUnavailableException           *interface{}
	StatusCode                            int64
	ThrottlingException                   *interface{}
}
