package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeBudgetActionsForAccountQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeBudgetActionsForAccountXAmzTargetEnum string

const (
	DescribeBudgetActionsForAccountXAmzTargetEnumAwsBudgetServiceGatewayDescribeBudgetActionsForAccount DescribeBudgetActionsForAccountXAmzTargetEnum = "AWSBudgetServiceGateway.DescribeBudgetActionsForAccount"
)

type DescribeBudgetActionsForAccountHeaders struct {
	XAmzAlgorithm     *string                                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeBudgetActionsForAccountXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeBudgetActionsForAccountRequest struct {
	QueryParams DescribeBudgetActionsForAccountQueryParams
	Headers     DescribeBudgetActionsForAccountHeaders
	Request     shared.DescribeBudgetActionsForAccountRequest `request:"mediaType=application/json"`
}

type DescribeBudgetActionsForAccountResponse struct {
	AccessDeniedException                   *interface{}
	ContentType                             string
	DescribeBudgetActionsForAccountResponse *shared.DescribeBudgetActionsForAccountResponse
	InternalErrorException                  *interface{}
	InvalidNextTokenException               *interface{}
	InvalidParameterException               *interface{}
	StatusCode                              int64
}
