package operations

import (
	"openapi/pkg/models/shared"
)

type SearchFormatEnum string

const (
	SearchFormatEnumSdk SearchFormatEnum = "sdk"
)

type SearchPrettyEnum string

const (
	SearchPrettyEnumTrue SearchPrettyEnum = "true"
)

type SearchQParserEnum string

const (
	SearchQParserEnumSimple     SearchQParserEnum = "simple"
	SearchQParserEnumStructured SearchQParserEnum = "structured"
	SearchQParserEnumLucene     SearchQParserEnum = "lucene"
	SearchQParserEnumDismax     SearchQParserEnum = "dismax"
)

type SearchQueryParams struct {
	Cursor    *string            `queryParam:"style=form,explode=true,name=cursor"`
	Expr      *string            `queryParam:"style=form,explode=true,name=expr"`
	Facet     *string            `queryParam:"style=form,explode=true,name=facet"`
	Format    SearchFormatEnum   `queryParam:"style=form,explode=true,name=format"`
	Fq        *string            `queryParam:"style=form,explode=true,name=fq"`
	Highlight *string            `queryParam:"style=form,explode=true,name=highlight"`
	Partial   *bool              `queryParam:"style=form,explode=true,name=partial"`
	Pretty    SearchPrettyEnum   `queryParam:"style=form,explode=true,name=pretty"`
	Q         string             `queryParam:"style=form,explode=true,name=q"`
	QOptions  *string            `queryParam:"style=form,explode=true,name=q.options"`
	QParser   *SearchQParserEnum `queryParam:"style=form,explode=true,name=q.parser"`
	Return    *string            `queryParam:"style=form,explode=true,name=return"`
	Size      *int64             `queryParam:"style=form,explode=true,name=size"`
	Sort      *string            `queryParam:"style=form,explode=true,name=sort"`
	Start     *int64             `queryParam:"style=form,explode=true,name=start"`
	Stats     *string            `queryParam:"style=form,explode=true,name=stats"`
}

type SearchHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type SearchRequest struct {
	QueryParams SearchQueryParams
	Headers     SearchHeaders
}

type SearchResponse struct {
	ContentType     string
	SearchException *shared.SearchException
	SearchResponse  *shared.SearchResponse
	StatusCode      int64
}
