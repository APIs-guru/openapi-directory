package operations

import (
	"openapi/pkg/models/shared"
)

type ModifyEventSubscriptionXAmzTargetEnum string

const (
	ModifyEventSubscriptionXAmzTargetEnumAmazonDmSv20160101ModifyEventSubscription ModifyEventSubscriptionXAmzTargetEnum = "AmazonDMSv20160101.ModifyEventSubscription"
)

type ModifyEventSubscriptionHeaders struct {
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ModifyEventSubscriptionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ModifyEventSubscriptionRequest struct {
	Headers ModifyEventSubscriptionHeaders
	Request shared.ModifyEventSubscriptionMessage `request:"mediaType=application/json"`
}

type ModifyEventSubscriptionResponse struct {
	ContentType                     string
	KmsAccessDeniedFault            *interface{}
	KmsDisabledFault                *interface{}
	KmsInvalidStateFault            *interface{}
	KmsNotFoundFault                *interface{}
	KmsThrottlingFault              *interface{}
	ModifyEventSubscriptionResponse *shared.ModifyEventSubscriptionResponse
	ResourceNotFoundFault           *interface{}
	ResourceQuotaExceededFault      *interface{}
	SnsInvalidTopicFault            *interface{}
	SnsNoAuthorizationFault         *interface{}
	StatusCode                      int64
}
