package operations

import (
	"openapi/pkg/models/shared"
)

type ModifyEventSubscriptionXAmzTargetEnum string

const (
	ModifyEventSubscriptionXAmzTargetEnumAmazonDmSv20160101ModifyEventSubscription ModifyEventSubscriptionXAmzTargetEnum = "AmazonDMSv20160101.ModifyEventSubscription"
)

type ModifyEventSubscriptionHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ModifyEventSubscriptionXAmzTargetEnum `header:"name=X-Amz-Target"`
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
