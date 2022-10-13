package operations

import (
	"openapi/pkg/models/shared"
)

type ListReportGroupsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListReportGroupsXAmzTargetEnum string

const (
	ListReportGroupsXAmzTargetEnumCodeBuild20161006ListReportGroups ListReportGroupsXAmzTargetEnum = "CodeBuild_20161006.ListReportGroups"
)

type ListReportGroupsHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListReportGroupsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListReportGroupsRequest struct {
	QueryParams ListReportGroupsQueryParams
	Headers     ListReportGroupsHeaders
	Request     shared.ListReportGroupsInput `request:"mediaType=application/json"`
}

type ListReportGroupsResponse struct {
	ContentType            string
	InvalidInputException  *interface{}
	ListReportGroupsOutput *shared.ListReportGroupsOutput
	StatusCode             int64
}
