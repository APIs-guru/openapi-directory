package operations

import (
	"openapi/pkg/models/shared"
)

type DetectEntitiesV2XAmzTargetEnum string

const (
	DetectEntitiesV2XAmzTargetEnumComprehendMedical20181030DetectEntitiesV2 DetectEntitiesV2XAmzTargetEnum = "ComprehendMedical_20181030.DetectEntitiesV2"
)

type DetectEntitiesV2Headers struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DetectEntitiesV2XAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DetectEntitiesV2Request struct {
	Headers DetectEntitiesV2Headers
	Request shared.DetectEntitiesV2Request `request:"mediaType=application/json"`
}

type DetectEntitiesV2Response struct {
	ContentType                    string
	DetectEntitiesV2Response       *shared.DetectEntitiesV2Response
	InternalServerException        *interface{}
	InvalidEncodingException       *interface{}
	InvalidRequestException        *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
	TextSizeLimitExceededException *interface{}
	TooManyRequestsException       *interface{}
}
