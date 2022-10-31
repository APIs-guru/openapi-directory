package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteNotificationXAmzTargetEnum string

const (
	DeleteNotificationXAmzTargetEnumAwsBudgetServiceGatewayDeleteNotification DeleteNotificationXAmzTargetEnum = "AWSBudgetServiceGateway.DeleteNotification"
)

type DeleteNotificationHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteNotificationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteNotificationRequest struct {
	Headers DeleteNotificationHeaders
	Request shared.DeleteNotificationRequest `request:"mediaType=application/json"`
}

type DeleteNotificationResponse struct {
	AccessDeniedException      *interface{}
	ContentType                string
	DeleteNotificationResponse map[string]interface{}
	InternalErrorException     *interface{}
	InvalidParameterException  *interface{}
	NotFoundException          *interface{}
	StatusCode                 int64
}
