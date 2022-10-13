package operations

import (
	"openapi/pkg/models/shared"
)

type StartRxNormInferenceJobXAmzTargetEnum string

const (
	StartRxNormInferenceJobXAmzTargetEnumComprehendMedical20181030StartRxNormInferenceJob StartRxNormInferenceJobXAmzTargetEnum = "ComprehendMedical_20181030.StartRxNormInferenceJob"
)

type StartRxNormInferenceJobHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartRxNormInferenceJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartRxNormInferenceJobRequest struct {
	Headers StartRxNormInferenceJobHeaders
	Request shared.StartRxNormInferenceJobRequest `request:"mediaType=application/json"`
}

type StartRxNormInferenceJobResponse struct {
	ContentType                     string
	InternalServerException         *interface{}
	InvalidRequestException         *interface{}
	ResourceNotFoundException       *interface{}
	StartRxNormInferenceJobResponse *shared.StartRxNormInferenceJobResponse
	StatusCode                      int64
	TooManyRequestsException        *interface{}
}
