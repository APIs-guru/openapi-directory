package operations

import (
	"openapi/pkg/models/shared"
)

type PutPartnerEventsXAmzTargetEnum string

const (
	PutPartnerEventsXAmzTargetEnumAwsEventsPutPartnerEvents PutPartnerEventsXAmzTargetEnum = "AWSEvents.PutPartnerEvents"
)

type PutPartnerEventsHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutPartnerEventsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutPartnerEventsRequest struct {
	Headers PutPartnerEventsHeaders
	Request shared.PutPartnerEventsRequest `request:"mediaType=application/json"`
}

type PutPartnerEventsResponse struct {
	ContentType                string
	InternalException          *interface{}
	OperationDisabledException *interface{}
	PutPartnerEventsResponse   *shared.PutPartnerEventsResponse
	StatusCode                 int64
}
