package operations

import (
	"openapi/pkg/models/shared"
)

type ListThingRegistrationTasksStatusEnum string

const (
	ListThingRegistrationTasksStatusEnumInProgress ListThingRegistrationTasksStatusEnum = "InProgress"
	ListThingRegistrationTasksStatusEnumCompleted  ListThingRegistrationTasksStatusEnum = "Completed"
	ListThingRegistrationTasksStatusEnumFailed     ListThingRegistrationTasksStatusEnum = "Failed"
	ListThingRegistrationTasksStatusEnumCancelled  ListThingRegistrationTasksStatusEnum = "Cancelled"
	ListThingRegistrationTasksStatusEnumCancelling ListThingRegistrationTasksStatusEnum = "Cancelling"
)

type ListThingRegistrationTasksQueryParams struct {
	MaxResults *int64                                `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string                               `queryParam:"style=form,explode=true,name=nextToken"`
	Status     *ListThingRegistrationTasksStatusEnum `queryParam:"style=form,explode=true,name=status"`
}

type ListThingRegistrationTasksHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListThingRegistrationTasksRequest struct {
	QueryParams ListThingRegistrationTasksQueryParams
	Headers     ListThingRegistrationTasksHeaders
}

type ListThingRegistrationTasksResponse struct {
	ContentType                        string
	InternalFailureException           *interface{}
	InvalidRequestException            *interface{}
	ListThingRegistrationTasksResponse *shared.ListThingRegistrationTasksResponse
	StatusCode                         int64
	ThrottlingException                *interface{}
	UnauthorizedException              *interface{}
}
