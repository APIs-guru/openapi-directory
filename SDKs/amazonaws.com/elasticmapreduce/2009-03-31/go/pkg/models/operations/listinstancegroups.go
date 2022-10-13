package operations

import (
	"openapi/pkg/models/shared"
)

type ListInstanceGroupsQueryParams struct {
	Marker *string `queryParam:"style=form,explode=true,name=Marker"`
}

type ListInstanceGroupsXAmzTargetEnum string

const (
	ListInstanceGroupsXAmzTargetEnumElasticMapReduceListInstanceGroups ListInstanceGroupsXAmzTargetEnum = "ElasticMapReduce.ListInstanceGroups"
)

type ListInstanceGroupsHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListInstanceGroupsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListInstanceGroupsRequest struct {
	QueryParams ListInstanceGroupsQueryParams
	Headers     ListInstanceGroupsHeaders
	Request     shared.ListInstanceGroupsInput `request:"mediaType=application/json"`
}

type ListInstanceGroupsResponse struct {
	ContentType              string
	InternalServerException  *interface{}
	InvalidRequestException  *interface{}
	ListInstanceGroupsOutput *shared.ListInstanceGroupsOutput
	StatusCode               int64
}
