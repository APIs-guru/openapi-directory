package operations

import (
	"openapi/pkg/models/shared"
)

type GetEbsVolumeRecommendationsXAmzTargetEnum string

const (
	GetEbsVolumeRecommendationsXAmzTargetEnumComputeOptimizerServiceGetEbsVolumeRecommendations GetEbsVolumeRecommendationsXAmzTargetEnum = "ComputeOptimizerService.GetEBSVolumeRecommendations"
)

type GetEbsVolumeRecommendationsHeaders struct {
	XAmzAlgorithm     *string                                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetEbsVolumeRecommendationsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetEbsVolumeRecommendationsRequest struct {
	Headers GetEbsVolumeRecommendationsHeaders
	Request shared.GetEbsVolumeRecommendationsRequest `request:"mediaType=application/json"`
}

type GetEbsVolumeRecommendationsResponse struct {
	AccessDeniedException               *interface{}
	ContentType                         string
	GetEbsVolumeRecommendationsResponse *shared.GetEbsVolumeRecommendationsResponse
	InternalServerException             *interface{}
	InvalidParameterValueException      *interface{}
	MissingAuthenticationToken          *interface{}
	OptInRequiredException              *interface{}
	ResourceNotFoundException           *interface{}
	ServiceUnavailableException         *interface{}
	StatusCode                          int64
	ThrottlingException                 *interface{}
}
