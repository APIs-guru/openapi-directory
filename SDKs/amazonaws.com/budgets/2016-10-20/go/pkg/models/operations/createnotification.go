package operations

import (
	"openapi/pkg/models/shared"
)

type CreateNotificationXAmzTargetEnum string

const (
	CreateNotificationXAmzTargetEnumAwsBudgetServiceGatewayCreateNotification CreateNotificationXAmzTargetEnum = "AWSBudgetServiceGateway.CreateNotification"
)

type CreateNotificationHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateNotificationXAmzTargetEnum `header:"name=X-Amz-Target"`
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
