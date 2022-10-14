package operations

import (
	"openapi/pkg/models/shared"
)

type GetPercentilesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetPercentilesRequestBody struct {
	AggregationField *string   `json:"aggregationField,omitempty"`
	IndexName        *string   `json:"indexName,omitempty"`
	Percents         []float64 `json:"percents,omitempty"`
	QueryString      string    `json:"queryString"`
	QueryVersion     *string   `json:"queryVersion,omitempty"`
}

type GetPercentilesRequest struct {
	Headers GetPercentilesHeaders
	Request GetPercentilesRequestBody `request:"mediaType=application/json"`
}

type GetPercentilesResponse struct {
	ContentType                 string
	GetPercentilesResponse      *shared.GetPercentilesResponse
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
