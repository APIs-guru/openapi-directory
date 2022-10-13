package operations

import (
	"openapi/pkg/models/shared"
)

type ListTasksQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListTasksXAmzTargetEnum string

const (
	ListTasksXAmzTargetEnumFmrsServiceListTasks ListTasksXAmzTargetEnum = "FmrsService.ListTasks"
)

type ListTasksHeaders struct {
	XAmzAlgorithm     *string                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListTasksXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListTasksRequest struct {
	QueryParams ListTasksQueryParams
	Headers     ListTasksHeaders
	Request     shared.ListTasksRequest `request:"mediaType=application/json"`
}

type ListTasksResponse struct {
	ContentType             string
	InternalException       *interface{}
	InvalidRequestException *interface{}
	ListTasksResponse       *shared.ListTasksResponse
	StatusCode              int64
}
