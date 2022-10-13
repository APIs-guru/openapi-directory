package operations

import (
	"openapi/pkg/models/shared"
)

type InferRxNormXAmzTargetEnum string

const (
	InferRxNormXAmzTargetEnumComprehendMedical20181030InferRxNorm InferRxNormXAmzTargetEnum = "ComprehendMedical_20181030.InferRxNorm"
)

type InferRxNormHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        InferRxNormXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type InferRxNormRequest struct {
	Headers InferRxNormHeaders
	Request shared.InferRxNormRequest `request:"mediaType=application/json"`
}

type InferRxNormResponse struct {
	ContentType                    string
	InferRxNormResponse            *shared.InferRxNormResponse
	InternalServerException        *interface{}
	InvalidEncodingException       *interface{}
	InvalidRequestException        *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
	TextSizeLimitExceededException *interface{}
	TooManyRequestsException       *interface{}
}
