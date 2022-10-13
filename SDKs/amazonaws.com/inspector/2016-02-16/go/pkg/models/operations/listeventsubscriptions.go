package operations

import (
	"openapi/pkg/models/shared"
)

type ListEventSubscriptionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListEventSubscriptionsXAmzTargetEnum string

const (
	ListEventSubscriptionsXAmzTargetEnumInspectorServiceListEventSubscriptions ListEventSubscriptionsXAmzTargetEnum = "InspectorService.ListEventSubscriptions"
)

type ListEventSubscriptionsHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListEventSubscriptionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListEventSubscriptionsRequest struct {
	QueryParams ListEventSubscriptionsQueryParams
	Headers     ListEventSubscriptionsHeaders
	Request     shared.ListEventSubscriptionsRequest `request:"mediaType=application/json"`
}

type ListEventSubscriptionsResponse struct {
	AccessDeniedException          *interface{}
	ContentType                    string
	InternalException              *interface{}
	InvalidInputException          *interface{}
	ListEventSubscriptionsResponse *shared.ListEventSubscriptionsResponse
	NoSuchEntityException          *interface{}
	StatusCode                     int64
}
