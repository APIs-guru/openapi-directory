package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteBudgetXAmzTargetEnum string

const (
	DeleteBudgetXAmzTargetEnumAwsBudgetServiceGatewayDeleteBudget DeleteBudgetXAmzTargetEnum = "AWSBudgetServiceGateway.DeleteBudget"
)

type DeleteBudgetHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteBudgetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteBudgetRequest struct {
	Headers DeleteBudgetHeaders
	Request shared.DeleteBudgetRequest `request:"mediaType=application/json"`
}

type DeleteBudgetResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	DeleteBudgetResponse      map[string]interface{}
	InternalErrorException    *interface{}
	InvalidParameterException *interface{}
	NotFoundException         *interface{}
	StatusCode                int64
}
