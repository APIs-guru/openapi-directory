package operations

import (
	"openapi/pkg/models/shared"
)

type StopRxNormInferenceJobXAmzTargetEnum string

const (
	StopRxNormInferenceJobXAmzTargetEnumComprehendMedical20181030StopRxNormInferenceJob StopRxNormInferenceJobXAmzTargetEnum = "ComprehendMedical_20181030.StopRxNormInferenceJob"
)

type StopRxNormInferenceJobHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StopRxNormInferenceJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type StopRxNormInferenceJobRequest struct {
	Headers StopRxNormInferenceJobHeaders
	Request shared.StopRxNormInferenceJobRequest `request:"mediaType=application/json"`
}

type StopRxNormInferenceJobResponse struct {
	ContentType                    string
	InternalServerException        *interface{}
	InvalidRequestException        *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	StopRxNormInferenceJobResponse *shared.StopRxNormInferenceJobResponse
}
