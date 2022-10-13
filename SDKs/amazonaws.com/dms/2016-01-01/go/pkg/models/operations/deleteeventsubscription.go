package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteEventSubscriptionXAmzTargetEnum string

const (
	DeleteEventSubscriptionXAmzTargetEnumAmazonDmSv20160101DeleteEventSubscription DeleteEventSubscriptionXAmzTargetEnum = "AmazonDMSv20160101.DeleteEventSubscription"
)

type DeleteEventSubscriptionHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteEventSubscriptionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteEventSubscriptionRequest struct {
	Headers DeleteEventSubscriptionHeaders
	Request shared.DeleteEventSubscriptionMessage `request:"mediaType=application/json"`
}

type DeleteEventSubscriptionResponse struct {
	ContentType                     string
	DeleteEventSubscriptionResponse *shared.DeleteEventSubscriptionResponse
	InvalidResourceStateFault       *interface{}
	ResourceNotFoundFault           *interface{}
	StatusCode                      int64
}
