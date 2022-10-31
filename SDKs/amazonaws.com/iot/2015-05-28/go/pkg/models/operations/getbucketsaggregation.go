package operations

import (
	"openapi/pkg/models/shared"
)

type GetBucketsAggregationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetBucketsAggregationRequestBodyBucketsAggregationType struct {
	TermsAggregation *shared.TermsAggregation `json:"termsAggregation,omitempty"`
}

type GetBucketsAggregationRequestBody struct {
	AggregationField       string                                                 `json:"aggregationField"`
	BucketsAggregationType GetBucketsAggregationRequestBodyBucketsAggregationType `json:"bucketsAggregationType"`
	IndexName              *string                                                `json:"indexName,omitempty"`
	QueryString            string                                                 `json:"queryString"`
	QueryVersion           *string                                                `json:"queryVersion,omitempty"`
}

type GetBucketsAggregationRequest struct {
	Headers GetBucketsAggregationHeaders
	Request GetBucketsAggregationRequestBody `request:"mediaType=application/json"`
}

type GetBucketsAggregationResponse struct {
	ContentType                   string
	GetBucketsAggregationResponse *shared.GetBucketsAggregationResponse
	IndexNotReadyException        *interface{}
	InternalFailureException      *interface{}
	InvalidAggregationException   *interface{}
	InvalidQueryException         *interface{}
	InvalidRequestException       *interface{}
	ResourceNotFoundException     *interface{}
	ServiceUnavailableException   *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	UnauthorizedException         *interface{}
}
