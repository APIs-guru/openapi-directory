package operations

import (
	"openapi/pkg/models/shared"
)

type GetStagesPathParams struct {
	APIID string `pathParam:"style=simple,explode=false,name=apiId"`
}

type GetStagesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type GetStagesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetStagesRequest struct {
	PathParams  GetStagesPathParams
	QueryParams GetStagesQueryParams
	Headers     GetStagesHeaders
}

type GetStagesResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	GetStagesResponse        *shared.GetStagesResponse
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
