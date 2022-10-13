package operations

import (
	"openapi/pkg/models/shared"
)

type ListAnalyzersTypeEnum string

const (
	ListAnalyzersTypeEnumAccount      ListAnalyzersTypeEnum = "ACCOUNT"
	ListAnalyzersTypeEnumOrganization ListAnalyzersTypeEnum = "ORGANIZATION"
)

type ListAnalyzersQueryParams struct {
	MaxResults *int64                 `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string                `queryParam:"style=form,explode=true,name=nextToken"`
	Type       *ListAnalyzersTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type ListAnalyzersHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListAnalyzersRequest struct {
	QueryParams ListAnalyzersQueryParams
	Headers     ListAnalyzersHeaders
}

type ListAnalyzersResponse struct {
	AccessDeniedException   *interface{}
	ContentType             string
	InternalServerException *interface{}
	ListAnalyzersResponse   *shared.ListAnalyzersResponse
	StatusCode              int64
	ThrottlingException     *interface{}
	ValidationException     *interface{}
}
