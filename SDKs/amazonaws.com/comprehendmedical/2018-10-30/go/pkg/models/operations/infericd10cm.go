package operations

import (
	"openapi/pkg/models/shared"
)

type InferIcd10CmxAmzTargetEnum string

const (
	InferIcd10CmxAmzTargetEnumComprehendMedical20181030InferIcd10Cm InferIcd10CmxAmzTargetEnum = "ComprehendMedical_20181030.InferICD10CM"
)

type InferIcd10CmHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        InferIcd10CmxAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type InferIcd10CmRequest struct {
	Headers InferIcd10CmHeaders
	Request shared.InferIcd10CmRequest `request:"mediaType=application/json"`
}

type InferIcd10CmResponse struct {
	ContentType                    string
	InferIcd10CmResponse           *shared.InferIcd10CmResponse
	InternalServerException        *interface{}
	InvalidEncodingException       *interface{}
	InvalidRequestException        *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
	TextSizeLimitExceededException *interface{}
	TooManyRequestsException       *interface{}
}
