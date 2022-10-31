package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteEventSubscriptionXAmzTargetEnum string

const (
	DeleteEventSubscriptionXAmzTargetEnumAmazonDmSv20160101DeleteEventSubscription DeleteEventSubscriptionXAmzTargetEnum = "AmazonDMSv20160101.DeleteEventSubscription"
)

type DeleteEventSubscriptionHeaders struct {
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteEventSubscriptionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
