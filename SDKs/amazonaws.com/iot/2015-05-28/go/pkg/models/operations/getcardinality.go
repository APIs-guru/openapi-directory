package operations

import (
	"openapi/pkg/models/shared"
)

type GetCardinalityHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetCardinalityRequestBody struct {
	AggregationField *string `json:"aggregationField,omitempty"`
	IndexName        *string `json:"indexName,omitempty"`
	QueryString      string  `json:"queryString"`
	QueryVersion     *string `json:"queryVersion,omitempty"`
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
