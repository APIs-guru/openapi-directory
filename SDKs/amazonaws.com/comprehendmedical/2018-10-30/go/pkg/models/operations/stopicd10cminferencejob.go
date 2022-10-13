package operations

import (
	"openapi/pkg/models/shared"
)

type StopIcd10CmInferenceJobXAmzTargetEnum string

const (
	StopIcd10CmInferenceJobXAmzTargetEnumComprehendMedical20181030StopIcd10CmInferenceJob StopIcd10CmInferenceJobXAmzTargetEnum = "ComprehendMedical_20181030.StopICD10CMInferenceJob"
)

type StopIcd10CmInferenceJobHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StopIcd10CmInferenceJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StopIcd10CmInferenceJobRequest struct {
	Headers StopIcd10CmInferenceJobHeaders
	Request shared.StopIcd10CmInferenceJobRequest `request:"mediaType=application/json"`
}

type StopIcd10CmInferenceJobResponse struct {
	ContentType                     string
	InternalServerException         *interface{}
	InvalidRequestException         *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
	StopIcd10CmInferenceJobResponse *shared.StopIcd10CmInferenceJobResponse
}
