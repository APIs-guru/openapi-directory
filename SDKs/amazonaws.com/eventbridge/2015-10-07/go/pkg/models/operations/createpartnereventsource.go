package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePartnerEventSourceXAmzTargetEnum string

const (
	CreatePartnerEventSourceXAmzTargetEnumAwsEventsCreatePartnerEventSource CreatePartnerEventSourceXAmzTargetEnum = "AWSEvents.CreatePartnerEventSource"
)

type CreatePartnerEventSourceHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreatePartnerEventSourceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreatePartnerEventSourceRequest struct {
	Headers CreatePartnerEventSourceHeaders
	Request shared.CreatePartnerEventSourceRequest `request:"mediaType=application/json"`
}

type CreatePartnerEventSourceResponse struct {
	ConcurrentModificationException  *interface{}
	ContentType                      string
	CreatePartnerEventSourceResponse *shared.CreatePartnerEventSourceResponse
	InternalException                *interface{}
	LimitExceededException           *interface{}
	OperationDisabledException       *interface{}
	ResourceAlreadyExistsException   *interface{}
	StatusCode                       int64
}
