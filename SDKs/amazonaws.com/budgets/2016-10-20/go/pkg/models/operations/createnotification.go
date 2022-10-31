package operations

import (
	"openapi/pkg/models/shared"
)

type CreateNotificationXAmzTargetEnum string

const (
	CreateNotificationXAmzTargetEnumAwsBudgetServiceGatewayCreateNotification CreateNotificationXAmzTargetEnum = "AWSBudgetServiceGateway.CreateNotification"
)

type CreateNotificationHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateNotificationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateNotificationRequest struct {
	Headers CreateNotificationHeaders
	Request shared.CreateNotificationRequest `request:"mediaType=application/json"`
}

type CreateNotificationResponse struct {
	AccessDeniedException          *interface{}
	ContentType                    string
	CreateNotificationResponse     map[string]interface{}
	CreationLimitExceededException *interface{}
	DuplicateRecordException       *interface{}
	InternalErrorException         *interface{}
	InvalidParameterException      *interface{}
	NotFoundException              *interface{}
	StatusCode                     int64
}
