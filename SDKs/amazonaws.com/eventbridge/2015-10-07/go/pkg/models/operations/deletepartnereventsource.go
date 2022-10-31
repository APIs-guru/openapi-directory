package operations

import (
	"openapi/pkg/models/shared"
)

type DeletePartnerEventSourceXAmzTargetEnum string

const (
	DeletePartnerEventSourceXAmzTargetEnumAwsEventsDeletePartnerEventSource DeletePartnerEventSourceXAmzTargetEnum = "AWSEvents.DeletePartnerEventSource"
)

type DeletePartnerEventSourceHeaders struct {
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeletePartnerEventSourceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
