package operations

import (
	"openapi/pkg/models/shared"
)

type GetStatisticsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetStatisticsRequestBody struct {
	AggregationField *string `json:"aggregationField,omitempty"`
	IndexName        *string `json:"indexName,omitempty"`
	QueryString      string  `json:"queryString"`
	QueryVersion     *string `json:"queryVersion,omitempty"`
}

type GetStatisticsRequest struct {
	Headers GetStatisticsHeaders
	Request GetStatisticsRequestBody `request:"mediaType=application/json"`
}

type GetStatisticsResponse struct {
	ContentType                 string
	GetStatisticsResponse       *shared.GetStatisticsResponse
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
