package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSubscriberXAmzTargetEnum string

const (
	DeleteSubscriberXAmzTargetEnumAwsBudgetServiceGatewayDeleteSubscriber DeleteSubscriberXAmzTargetEnum = "AWSBudgetServiceGateway.DeleteSubscriber"
)

type DeleteSubscriberHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteSubscriberXAmzTargetEnum `header:"name=X-Amz-Target"`
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
