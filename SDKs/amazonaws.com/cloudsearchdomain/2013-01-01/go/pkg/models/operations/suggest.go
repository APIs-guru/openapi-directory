package operations

import (
	"openapi/pkg/models/shared"
)

type SuggestFormatEnum string

const (
	SuggestFormatEnumSdk SuggestFormatEnum = "sdk"
)

type SuggestPrettyEnum string

const (
	SuggestPrettyEnumTrue SuggestPrettyEnum = "true"
)

type SuggestQueryParams struct {
	Format    SuggestFormatEnum `queryParam:"style=form,explode=true,name=format"`
	Pretty    SuggestPrettyEnum `queryParam:"style=form,explode=true,name=pretty"`
	Q         string            `queryParam:"style=form,explode=true,name=q"`
	Size      *int64            `queryParam:"style=form,explode=true,name=size"`
	Suggester string            `queryParam:"style=form,explode=true,name=suggester"`
}

type SuggestHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type SuggestRequest struct {
	QueryParams SuggestQueryParams
	Headers     SuggestHeaders
}

type SuggestResponse struct {
	ContentType     string
	SearchException *shared.SearchException
	StatusCode      int64
	SuggestResponse *shared.SuggestResponse
}
