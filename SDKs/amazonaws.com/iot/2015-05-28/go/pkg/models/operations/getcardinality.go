package operations

import (
	"openapi/pkg/models/shared"
)

type GetCardinalityHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetCardinalityRequestBody struct {
	AggregationField *string `json:"aggregationField"`
	IndexName        *string `json:"indexName"`
	QueryString      string  `json:"queryString"`
	QueryVersion     *string `json:"queryVersion"`
}

type GetCardinalityRequest struct {
	Headers GetCardinalityHeaders
	Request GetCardinalityRequestBody `request:"mediaType=application/json"`
}

type GetCardinalityResponse struct {
	ContentType                 string
	GetCardinalityResponse      *shared.GetCardinalityResponse
	IndexNotReadyException      *interface{}
	InternalFailureException    *interface{}
	InvalidAggregationException *interface{}
	InvalidQueryException       *interface{}
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	UnauthorizedException       *interface{}
}
