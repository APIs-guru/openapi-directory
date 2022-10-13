package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeBudgetsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeBudgetsXAmzTargetEnum string

const (
	DescribeBudgetsXAmzTargetEnumAwsBudgetServiceGatewayDescribeBudgets DescribeBudgetsXAmzTargetEnum = "AWSBudgetServiceGateway.DescribeBudgets"
)

type DescribeBudgetsHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeBudgetsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeBudgetsRequest struct {
	QueryParams DescribeBudgetsQueryParams
	Headers     DescribeBudgetsHeaders
	Request     shared.DescribeBudgetsRequest `request:"mediaType=application/json"`
}

type DescribeBudgetsResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	DescribeBudgetsResponse   *shared.DescribeBudgetsResponse
	ExpiredNextTokenException *interface{}
	InternalErrorException    *interface{}
	InvalidNextTokenException *interface{}
	InvalidParameterException *interface{}
	NotFoundException         *interface{}
	StatusCode                int64
}
