package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateBudgetXAmzTargetEnum string

const (
	UpdateBudgetXAmzTargetEnumAwsBudgetServiceGatewayUpdateBudget UpdateBudgetXAmzTargetEnum = "AWSBudgetServiceGateway.UpdateBudget"
)

type UpdateBudgetHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateBudgetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateBudgetRequest struct {
	Headers UpdateBudgetHeaders
	Request shared.UpdateBudgetRequest `request:"mediaType=application/json"`
}

type UpdateBudgetResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	InternalErrorException    *interface{}
	InvalidParameterException *interface{}
	NotFoundException         *interface{}
	StatusCode                int64
	UpdateBudgetResponse      map[string]interface{}
}
