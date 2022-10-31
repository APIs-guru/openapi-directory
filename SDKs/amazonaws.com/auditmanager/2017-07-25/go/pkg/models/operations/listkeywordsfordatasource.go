package operations

import (
	"openapi/pkg/models/shared"
)

type ListKeywordsForDataSourceSourceEnum string

const (
	ListKeywordsForDataSourceSourceEnumAwsCloudtrail  ListKeywordsForDataSourceSourceEnum = "AWS_Cloudtrail"
	ListKeywordsForDataSourceSourceEnumAwsConfig      ListKeywordsForDataSourceSourceEnum = "AWS_Config"
	ListKeywordsForDataSourceSourceEnumAwsSecurityHub ListKeywordsForDataSourceSourceEnum = "AWS_Security_Hub"
	ListKeywordsForDataSourceSourceEnumAwsAPICall     ListKeywordsForDataSourceSourceEnum = "AWS_API_Call"
	ListKeywordsForDataSourceSourceEnumManual         ListKeywordsForDataSourceSourceEnum = "MANUAL"
)

type ListKeywordsForDataSourceQueryParams struct {
	MaxResults *int64                              `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string                             `queryParam:"style=form,explode=true,name=nextToken"`
	Source     ListKeywordsForDataSourceSourceEnum `queryParam:"style=form,explode=true,name=source"`
}

type ListKeywordsForDataSourceHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListKeywordsForDataSourceRequest struct {
	QueryParams ListKeywordsForDataSourceQueryParams
	Headers     ListKeywordsForDataSourceHeaders
}

type ListKeywordsForDataSourceResponse struct {
	AccessDeniedException             *interface{}
	ContentType                       string
	InternalServerException           *interface{}
	ListKeywordsForDataSourceResponse *shared.ListKeywordsForDataSourceResponse
	StatusCode                        int64
	ValidationException               *interface{}
}
