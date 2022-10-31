package operations

import (
	"openapi/pkg/models/shared"
)

type ListSharedReportGroupsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListSharedReportGroupsXAmzTargetEnum string

const (
	ListSharedReportGroupsXAmzTargetEnumCodeBuild20161006ListSharedReportGroups ListSharedReportGroupsXAmzTargetEnum = "CodeBuild_20161006.ListSharedReportGroups"
)

type ListSharedReportGroupsHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListSharedReportGroupsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListSharedReportGroupsRequest struct {
	QueryParams ListSharedReportGroupsQueryParams
	Headers     ListSharedReportGroupsHeaders
	Request     shared.ListSharedReportGroupsInput `request:"mediaType=application/json"`
}

type ListSharedReportGroupsResponse struct {
	ContentType                  string
	InvalidInputException        *interface{}
	ListSharedReportGroupsOutput *shared.ListSharedReportGroupsOutput
	StatusCode                   int64
}
