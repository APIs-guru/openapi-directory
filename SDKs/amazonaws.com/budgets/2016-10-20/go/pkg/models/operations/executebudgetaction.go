package operations

import (
	"openapi/pkg/models/shared"
)

type ExecuteBudgetActionXAmzTargetEnum string

const (
	ExecuteBudgetActionXAmzTargetEnumAwsBudgetServiceGatewayExecuteBudgetAction ExecuteBudgetActionXAmzTargetEnum = "AWSBudgetServiceGateway.ExecuteBudgetAction"
)

type ExecuteBudgetActionHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ExecuteBudgetActionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ExecuteBudgetActionRequest struct {
	Headers ExecuteBudgetActionHeaders
	Request shared.ExecuteBudgetActionRequest `request:"mediaType=application/json"`
}

type ExecuteBudgetActionResponse struct {
	AccessDeniedException       *interface{}
	ContentType                 string
	ExecuteBudgetActionResponse *shared.ExecuteBudgetActionResponse
	InternalErrorException      *interface{}
	InvalidParameterException   *interface{}
	NotFoundException           *interface{}
	ResourceLockedException     *interface{}
	StatusCode                  int64
}
