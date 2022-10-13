package operations

import (
	"openapi/pkg/models/shared"
)

type ListPartnerEventSourcesXAmzTargetEnum string

const (
	ListPartnerEventSourcesXAmzTargetEnumAwsEventsListPartnerEventSources ListPartnerEventSourcesXAmzTargetEnum = "AWSEvents.ListPartnerEventSources"
)

type ListPartnerEventSourcesHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListPartnerEventSourcesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListPartnerEventSourcesRequest struct {
	Headers ListPartnerEventSourcesHeaders
	Request shared.ListPartnerEventSourcesRequest `request:"mediaType=application/json"`
}

type ListPartnerEventSourcesResponse struct {
	ContentType                     string
	InternalException               *interface{}
	ListPartnerEventSourcesResponse *shared.ListPartnerEventSourcesResponse
	OperationDisabledException      *interface{}
	StatusCode                      int64
}
