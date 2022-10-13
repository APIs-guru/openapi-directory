package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeBudgetXAmzTargetEnum string

const (
	DescribeBudgetXAmzTargetEnumAwsBudgetServiceGatewayDescribeBudget DescribeBudgetXAmzTargetEnum = "AWSBudgetServiceGateway.DescribeBudget"
)

type DescribeBudgetHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeBudgetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeBudgetRequest struct {
	Headers DescribeBudgetHeaders
	Request shared.DescribeBudgetRequest `request:"mediaType=application/json"`
}

type DescribeBudgetResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	DescribeBudgetResponse    *shared.DescribeBudgetResponse
	InternalErrorException    *interface{}
	InvalidParameterException *interface{}
	NotFoundException         *interface{}
	StatusCode                int64
}
