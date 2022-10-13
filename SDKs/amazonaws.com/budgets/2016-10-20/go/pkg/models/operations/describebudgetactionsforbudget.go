package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeBudgetActionsForBudgetQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeBudgetActionsForBudgetXAmzTargetEnum string

const (
	DescribeBudgetActionsForBudgetXAmzTargetEnumAwsBudgetServiceGatewayDescribeBudgetActionsForBudget DescribeBudgetActionsForBudgetXAmzTargetEnum = "AWSBudgetServiceGateway.DescribeBudgetActionsForBudget"
)

type DescribeBudgetActionsForBudgetHeaders struct {
	XAmzAlgorithm     *string                                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeBudgetActionsForBudgetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeBudgetActionsForBudgetRequest struct {
	QueryParams DescribeBudgetActionsForBudgetQueryParams
	Headers     DescribeBudgetActionsForBudgetHeaders
	Request     shared.DescribeBudgetActionsForBudgetRequest `request:"mediaType=application/json"`
}

type DescribeBudgetActionsForBudgetResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	DescribeBudgetActionsForBudgetResponse *shared.DescribeBudgetActionsForBudgetResponse
	InternalErrorException                 *interface{}
	InvalidNextTokenException              *interface{}
	InvalidParameterException              *interface{}
	NotFoundException                      *interface{}
	StatusCode                             int64
}
