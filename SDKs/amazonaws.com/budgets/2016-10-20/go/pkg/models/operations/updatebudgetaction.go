package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateBudgetActionXAmzTargetEnum string

const (
	UpdateBudgetActionXAmzTargetEnumAwsBudgetServiceGatewayUpdateBudgetAction UpdateBudgetActionXAmzTargetEnum = "AWSBudgetServiceGateway.UpdateBudgetAction"
)

type UpdateBudgetActionHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateBudgetActionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateBudgetActionRequest struct {
	Headers UpdateBudgetActionHeaders
	Request shared.UpdateBudgetActionRequest `request:"mediaType=application/json"`
}

type UpdateBudgetActionResponse struct {
	AccessDeniedException      *interface{}
	ContentType                string
	InternalErrorException     *interface{}
	InvalidParameterException  *interface{}
	NotFoundException          *interface{}
	ResourceLockedException    *interface{}
	StatusCode                 int64
	UpdateBudgetActionResponse *shared.UpdateBudgetActionResponse
}
