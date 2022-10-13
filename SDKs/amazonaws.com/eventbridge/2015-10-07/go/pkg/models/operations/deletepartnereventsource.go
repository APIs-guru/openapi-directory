package operations

import (
	"openapi/pkg/models/shared"
)

type DeletePartnerEventSourceXAmzTargetEnum string

const (
	DeletePartnerEventSourceXAmzTargetEnumAwsEventsDeletePartnerEventSource DeletePartnerEventSourceXAmzTargetEnum = "AWSEvents.DeletePartnerEventSource"
)

type DeletePartnerEventSourceHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeletePartnerEventSourceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeletePartnerEventSourceRequest struct {
	Headers DeletePartnerEventSourceHeaders
	Request shared.DeletePartnerEventSourceRequest `request:"mediaType=application/json"`
}

type DeletePartnerEventSourceResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	InternalException               *interface{}
	OperationDisabledException      *interface{}
	StatusCode                      int64
}
