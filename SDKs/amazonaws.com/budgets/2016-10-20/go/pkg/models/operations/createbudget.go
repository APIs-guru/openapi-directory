package operations

import (
	"openapi/pkg/models/shared"
)

type CreateBudgetXAmzTargetEnum string

const (
	CreateBudgetXAmzTargetEnumAwsBudgetServiceGatewayCreateBudget CreateBudgetXAmzTargetEnum = "AWSBudgetServiceGateway.CreateBudget"
)

type CreateBudgetHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateBudgetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateBudgetRequest struct {
	Headers CreateBudgetHeaders
	Request shared.CreateBudgetRequest `request:"mediaType=application/json"`
}

type CreateBudgetResponse struct {
	AccessDeniedException          *interface{}
	ContentType                    string
	CreateBudgetResponse           map[string]interface{}
	CreationLimitExceededException *interface{}
	DuplicateRecordException       *interface{}
	InternalErrorException         *interface{}
	InvalidParameterException      *interface{}
	StatusCode                     int64
}
