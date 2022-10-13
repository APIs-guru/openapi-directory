package operations

type GetListTemplatesActionEnum string

const (
	GetListTemplatesActionEnumListTemplates GetListTemplatesActionEnum = "ListTemplates"
)

type GetListTemplatesVersionEnum string

const (
	GetListTemplatesVersionEnumTwoThousandAndTen1201 GetListTemplatesVersionEnum = "2010-12-01"
)

type GetListTemplatesQueryParams struct {
	Action    GetListTemplatesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxItems  *int64                      `queryParam:"style=form,explode=true,name=MaxItems"`
	NextToken *string                     `queryParam:"style=form,explode=true,name=NextToken"`
	Version   GetListTemplatesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetListTemplatesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetListTemplatesRequest struct {
	QueryParams GetListTemplatesQueryParams
	Headers     GetListTemplatesHeaders
}

type GetListTemplatesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
