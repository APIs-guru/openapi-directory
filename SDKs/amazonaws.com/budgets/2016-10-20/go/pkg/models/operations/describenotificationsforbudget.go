package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeNotificationsForBudgetQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeNotificationsForBudgetXAmzTargetEnum string

const (
	DescribeNotificationsForBudgetXAmzTargetEnumAwsBudgetServiceGatewayDescribeNotificationsForBudget DescribeNotificationsForBudgetXAmzTargetEnum = "AWSBudgetServiceGateway.DescribeNotificationsForBudget"
)

type DescribeNotificationsForBudgetHeaders struct {
	XAmzAlgorithm     *string                                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeNotificationsForBudgetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeNotificationsForBudgetRequest struct {
	QueryParams DescribeNotificationsForBudgetQueryParams
	Headers     DescribeNotificationsForBudgetHeaders
	Request     shared.DescribeNotificationsForBudgetRequest `request:"mediaType=application/json"`
}

type DescribeNotificationsForBudgetResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	DescribeNotificationsForBudgetResponse *shared.DescribeNotificationsForBudgetResponse
	ExpiredNextTokenException              *interface{}
	InternalErrorException                 *interface{}
	InvalidNextTokenException              *interface{}
	InvalidParameterException              *interface{}
	NotFoundException                      *interface{}
	StatusCode                             int64
}
