package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteBudgetActionXAmzTargetEnum string

const (
	DeleteBudgetActionXAmzTargetEnumAwsBudgetServiceGatewayDeleteBudgetAction DeleteBudgetActionXAmzTargetEnum = "AWSBudgetServiceGateway.DeleteBudgetAction"
)

type DeleteBudgetActionHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteBudgetActionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteBudgetActionRequest struct {
	Headers DeleteBudgetActionHeaders
	Request shared.DeleteBudgetActionRequest `request:"mediaType=application/json"`
}

type DeleteBudgetActionResponse struct {
	AccessDeniedException      *interface{}
	ContentType                string
	DeleteBudgetActionResponse *shared.DeleteBudgetActionResponse
	InternalErrorException     *interface{}
	InvalidParameterException  *interface{}
	NotFoundException          *interface{}
	ResourceLockedException    *interface{}
	StatusCode                 int64
}
