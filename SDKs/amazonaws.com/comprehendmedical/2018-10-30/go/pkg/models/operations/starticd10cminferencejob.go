package operations

import (
	"openapi/pkg/models/shared"
)

type StartIcd10CmInferenceJobXAmzTargetEnum string

const (
	StartIcd10CmInferenceJobXAmzTargetEnumComprehendMedical20181030StartIcd10CmInferenceJob StartIcd10CmInferenceJobXAmzTargetEnum = "ComprehendMedical_20181030.StartICD10CMInferenceJob"
)

type StartIcd10CmInferenceJobHeaders struct {
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StartIcd10CmInferenceJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type StartIcd10CmInferenceJobRequest struct {
	Headers StartIcd10CmInferenceJobHeaders
	Request shared.StartIcd10CmInferenceJobRequest `request:"mediaType=application/json"`
}

type StartIcd10CmInferenceJobResponse struct {
	ContentType                      string
	InternalServerException          *interface{}
	InvalidRequestException          *interface{}
	ResourceNotFoundException        *interface{}
	StartIcd10CmInferenceJobResponse *shared.StartIcd10CmInferenceJobResponse
	StatusCode                       int64
	TooManyRequestsException         *interface{}
}
