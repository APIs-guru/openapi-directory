package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSubscriberXAmzTargetEnum string

const (
	UpdateSubscriberXAmzTargetEnumAwsBudgetServiceGatewayUpdateSubscriber UpdateSubscriberXAmzTargetEnum = "AWSBudgetServiceGateway.UpdateSubscriber"
)

type UpdateSubscriberHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateSubscriberXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateSubscriberRequest struct {
	Headers UpdateSubscriberHeaders
	Request shared.UpdateSubscriberRequest `request:"mediaType=application/json"`
}

type UpdateSubscriberResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	DuplicateRecordException  *interface{}
	InternalErrorException    *interface{}
	InvalidParameterException *interface{}
	NotFoundException         *interface{}
	StatusCode                int64
	UpdateSubscriberResponse  map[string]interface{}
}
