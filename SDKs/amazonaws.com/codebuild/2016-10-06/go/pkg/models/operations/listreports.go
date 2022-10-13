package operations

import (
	"openapi/pkg/models/shared"
)

type ListReportsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListReportsXAmzTargetEnum string

const (
	ListReportsXAmzTargetEnumCodeBuild20161006ListReports ListReportsXAmzTargetEnum = "CodeBuild_20161006.ListReports"
)

type ListReportsHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListReportsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListReportsRequest struct {
	QueryParams ListReportsQueryParams
	Headers     ListReportsHeaders
	Request     shared.ListReportsInput `request:"mediaType=application/json"`
}

type ListReportsResponse struct {
	ContentType           string
	InvalidInputException *interface{}
	ListReportsOutput     *shared.ListReportsOutput
	StatusCode            int64
}
