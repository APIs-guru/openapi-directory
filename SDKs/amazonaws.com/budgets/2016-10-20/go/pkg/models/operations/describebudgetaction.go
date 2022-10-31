package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeBudgetActionXAmzTargetEnum string

const (
	DescribeBudgetActionXAmzTargetEnumAwsBudgetServiceGatewayDescribeBudgetAction DescribeBudgetActionXAmzTargetEnum = "AWSBudgetServiceGateway.DescribeBudgetAction"
)

type DescribeBudgetActionHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeBudgetActionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
