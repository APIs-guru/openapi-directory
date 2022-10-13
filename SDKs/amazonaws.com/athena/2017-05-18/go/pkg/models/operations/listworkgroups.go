package operations

import (
	"openapi/pkg/models/shared"
)

type ListWorkGroupsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListWorkGroupsXAmzTargetEnum string

const (
	ListWorkGroupsXAmzTargetEnumAmazonAthenaListWorkGroups ListWorkGroupsXAmzTargetEnum = "AmazonAthena.ListWorkGroups"
)

type ListWorkGroupsHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListWorkGroupsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListWorkGroupsRequest struct {
	QueryParams ListWorkGroupsQueryParams
	Headers     ListWorkGroupsHeaders
	Request     shared.ListWorkGroupsInput `request:"mediaType=application/json"`
}

type ListWorkGroupsResponse struct {
	ContentType             string
	InternalServerException *interface{}
	InvalidRequestException *interface{}
	ListWorkGroupsOutput    *shared.ListWorkGroupsOutput
	StatusCode              int64
}
