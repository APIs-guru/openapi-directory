package operations

import (
	"openapi/pkg/models/shared"
)

type ListAssessmentFrameworksFrameworkTypeEnum string

const (
	ListAssessmentFrameworksFrameworkTypeEnumStandard ListAssessmentFrameworksFrameworkTypeEnum = "Standard"
	ListAssessmentFrameworksFrameworkTypeEnumCustom   ListAssessmentFrameworksFrameworkTypeEnum = "Custom"
)

type ListAssessmentFrameworksQueryParams struct {
	FrameworkType ListAssessmentFrameworksFrameworkTypeEnum `queryParam:"style=form,explode=true,name=frameworkType"`
	MaxResults    *int64                                    `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken     *string                                   `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListAssessmentFrameworksHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListAssessmentFrameworksRequest struct {
	QueryParams ListAssessmentFrameworksQueryParams
	Headers     ListAssessmentFrameworksHeaders
}

type ListAssessmentFrameworksResponse struct {
	AccessDeniedException            *interface{}
	ContentType                      string
	InternalServerException          *interface{}
	ListAssessmentFrameworksResponse *shared.ListAssessmentFrameworksResponse
	StatusCode                       int64
	ValidationException              *interface{}
}
