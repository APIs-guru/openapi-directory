package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSubscriberXAmzTargetEnum string

const (
	DeleteSubscriberXAmzTargetEnumAwsBudgetServiceGatewayDeleteSubscriber DeleteSubscriberXAmzTargetEnum = "AWSBudgetServiceGateway.DeleteSubscriber"
)

type DeleteSubscriberHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteSubscriberXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteSubscriberRequest struct {
	Headers DeleteSubscriberHeaders
	Request shared.DeleteSubscriberRequest `request:"mediaType=application/json"`
}

type DeleteSubscriberResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	DeleteSubscriberResponse  map[string]interface{}
	InternalErrorException    *interface{}
	InvalidParameterException *interface{}
	NotFoundException         *interface{}
	StatusCode                int64
}
