package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeBudgetActionHistoriesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeBudgetActionHistoriesXAmzTargetEnum string

const (
	DescribeBudgetActionHistoriesXAmzTargetEnumAwsBudgetServiceGatewayDescribeBudgetActionHistories DescribeBudgetActionHistoriesXAmzTargetEnum = "AWSBudgetServiceGateway.DescribeBudgetActionHistories"
)

type DescribeBudgetActionHistoriesHeaders struct {
	XAmzAlgorithm     *string                                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeBudgetActionHistoriesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeBudgetActionHistoriesRequest struct {
	QueryParams DescribeBudgetActionHistoriesQueryParams
	Headers     DescribeBudgetActionHistoriesHeaders
	Request     shared.DescribeBudgetActionHistoriesRequest `request:"mediaType=application/json"`
}

type DescribeBudgetActionHistoriesResponse struct {
	AccessDeniedException                 *interface{}
	ContentType                           string
	DescribeBudgetActionHistoriesResponse *shared.DescribeBudgetActionHistoriesResponse
	InternalErrorException                *interface{}
	InvalidNextTokenException             *interface{}
	InvalidParameterException             *interface{}
	NotFoundException                     *interface{}
	StatusCode                            int64
}
