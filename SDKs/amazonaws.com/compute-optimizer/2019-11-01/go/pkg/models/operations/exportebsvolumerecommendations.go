package operations

import (
	"openapi/pkg/models/shared"
)

type ExportEbsVolumeRecommendationsXAmzTargetEnum string

const (
	ExportEbsVolumeRecommendationsXAmzTargetEnumComputeOptimizerServiceExportEbsVolumeRecommendations ExportEbsVolumeRecommendationsXAmzTargetEnum = "ComputeOptimizerService.ExportEBSVolumeRecommendations"
)

type ExportEbsVolumeRecommendationsHeaders struct {
	XAmzAlgorithm     *string                                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ExportEbsVolumeRecommendationsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ExportEbsVolumeRecommendationsRequest struct {
	Headers ExportEbsVolumeRecommendationsHeaders
	Request shared.ExportEbsVolumeRecommendationsRequest `request:"mediaType=application/json"`
}

type ExportEbsVolumeRecommendationsResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	ExportEbsVolumeRecommendationsResponse *shared.ExportEbsVolumeRecommendationsResponse
	InternalServerException                *interface{}
	InvalidParameterValueException         *interface{}
	LimitExceededException                 *interface{}
	MissingAuthenticationToken             *interface{}
	OptInRequiredException                 *interface{}
	ServiceUnavailableException            *interface{}
	StatusCode                             int64
	ThrottlingException                    *interface{}
}
