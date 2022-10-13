package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteScheduledActionXAmzTargetEnum string

const (
	DeleteScheduledActionXAmzTargetEnumAnyScaleFrontendServiceDeleteScheduledAction DeleteScheduledActionXAmzTargetEnum = "AnyScaleFrontendService.DeleteScheduledAction"
)

type DeleteScheduledActionHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteScheduledActionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteScheduledActionRequest struct {
	Headers DeleteScheduledActionHeaders
	Request shared.DeleteScheduledActionRequest `request:"mediaType=application/json"`
}

type DeleteScheduledActionResponse struct {
	ConcurrentUpdateException     *interface{}
	ContentType                   string
	DeleteScheduledActionResponse map[string]interface{}
	InternalServiceException      *interface{}
	ObjectNotFoundException       *interface{}
	StatusCode                    int64
	ValidationException           *interface{}
}
