package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateNotificationXAmzTargetEnum string

const (
	UpdateNotificationXAmzTargetEnumAwsBudgetServiceGatewayUpdateNotification UpdateNotificationXAmzTargetEnum = "AWSBudgetServiceGateway.UpdateNotification"
)

type UpdateNotificationHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateNotificationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateNotificationRequest struct {
	Headers UpdateNotificationHeaders
	Request shared.UpdateNotificationRequest `request:"mediaType=application/json"`
}

type UpdateNotificationResponse struct {
	AccessDeniedException      *interface{}
	ContentType                string
	DuplicateRecordException   *interface{}
	InternalErrorException     *interface{}
	InvalidParameterException  *interface{}
	NotFoundException          *interface{}
	StatusCode                 int64
	UpdateNotificationResponse map[string]interface{}
}
