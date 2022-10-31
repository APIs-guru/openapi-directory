package operations

import (
	"openapi/pkg/models/shared"
)

type PutScheduledActionXAmzTargetEnum string

const (
	PutScheduledActionXAmzTargetEnumAnyScaleFrontendServicePutScheduledAction PutScheduledActionXAmzTargetEnum = "AnyScaleFrontendService.PutScheduledAction"
)

type PutScheduledActionHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        PutScheduledActionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type PutScheduledActionRequest struct {
	Headers PutScheduledActionHeaders
	Request shared.PutScheduledActionRequest `request:"mediaType=application/json"`
}

type PutScheduledActionResponse struct {
	ConcurrentUpdateException  *interface{}
	ContentType                string
	InternalServiceException   *interface{}
	LimitExceededException     *interface{}
	ObjectNotFoundException    *interface{}
	PutScheduledActionResponse map[string]interface{}
	StatusCode                 int64
	ValidationException        *interface{}
}
