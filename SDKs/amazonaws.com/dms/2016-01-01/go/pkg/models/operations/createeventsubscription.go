package operations

import (
	"openapi/pkg/models/shared"
)

type CreateEventSubscriptionXAmzTargetEnum string

const (
	CreateEventSubscriptionXAmzTargetEnumAmazonDmSv20160101CreateEventSubscription CreateEventSubscriptionXAmzTargetEnum = "AmazonDMSv20160101.CreateEventSubscription"
)

type CreateEventSubscriptionHeaders struct {
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateEventSubscriptionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateEventSubscriptionRequest struct {
	Headers CreateEventSubscriptionHeaders
	Request shared.CreateEventSubscriptionMessage `request:"mediaType=application/json"`
}

type CreateEventSubscriptionResponse struct {
	ContentType                     string
	CreateEventSubscriptionResponse *shared.CreateEventSubscriptionResponse
	KmsAccessDeniedFault            *interface{}
	KmsDisabledFault                *interface{}
	KmsInvalidStateFault            *interface{}
	KmsNotFoundFault                *interface{}
	KmsThrottlingFault              *interface{}
	ResourceAlreadyExistsFault      *interface{}
	ResourceNotFoundFault           *interface{}
	ResourceQuotaExceededFault      *interface{}
	SnsInvalidTopicFault            *interface{}
	SnsNoAuthorizationFault         *interface{}
	StatusCode                      int64
}
