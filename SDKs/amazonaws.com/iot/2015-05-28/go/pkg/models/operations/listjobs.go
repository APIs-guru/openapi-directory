package operations

import (
	"openapi/pkg/models/shared"
)

type ListJobsStatusEnum string

const (
	ListJobsStatusEnumInProgress         ListJobsStatusEnum = "IN_PROGRESS"
	ListJobsStatusEnumCanceled           ListJobsStatusEnum = "CANCELED"
	ListJobsStatusEnumCompleted          ListJobsStatusEnum = "COMPLETED"
	ListJobsStatusEnumDeletionInProgress ListJobsStatusEnum = "DELETION_IN_PROGRESS"
)

type ListJobsTargetSelectionEnum string

const (
	ListJobsTargetSelectionEnumContinuous ListJobsTargetSelectionEnum = "CONTINUOUS"
	ListJobsTargetSelectionEnumSnapshot   ListJobsTargetSelectionEnum = "SNAPSHOT"
)

type ListJobsQueryParams struct {
	MaxResults      *int64                       `queryParam:"style=form,explode=true,name=maxResults"`
	NamespaceID     *string                      `queryParam:"style=form,explode=true,name=namespaceId"`
	NextToken       *string                      `queryParam:"style=form,explode=true,name=nextToken"`
	Status          *ListJobsStatusEnum          `queryParam:"style=form,explode=true,name=status"`
	TargetSelection *ListJobsTargetSelectionEnum `queryParam:"style=form,explode=true,name=targetSelection"`
	ThingGroupID    *string                      `queryParam:"style=form,explode=true,name=thingGroupId"`
	ThingGroupName  *string                      `queryParam:"style=form,explode=true,name=thingGroupName"`
}

type ListJobsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListJobsRequest struct {
	QueryParams ListJobsQueryParams
	Headers     ListJobsHeaders
}

type ListJobsResponse struct {
	ContentType                 string
	InvalidRequestException     *interface{}
	ListJobsResponse            *shared.ListJobsResponse
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
}
