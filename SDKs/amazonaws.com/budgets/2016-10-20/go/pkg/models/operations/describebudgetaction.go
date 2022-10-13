package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeBudgetActionXAmzTargetEnum string

const (
	DescribeBudgetActionXAmzTargetEnumAwsBudgetServiceGatewayDescribeBudgetAction DescribeBudgetActionXAmzTargetEnum = "AWSBudgetServiceGateway.DescribeBudgetAction"
)

type DescribeBudgetActionHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeBudgetActionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeBudgetActionRequest struct {
	Headers DescribeBudgetActionHeaders
	Request shared.DescribeBudgetActionRequest `request:"mediaType=application/json"`
}

type DescribeBudgetActionResponse struct {
	AccessDeniedException        *interface{}
	ContentType                  string
	DescribeBudgetActionResponse *shared.DescribeBudgetActionResponse
	InternalErrorException       *interface{}
	InvalidParameterException    *interface{}
	NotFoundException            *interface{}
	StatusCode                   int64
}
