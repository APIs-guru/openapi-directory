package operations

type PostGetTemplateActionEnum string

const (
	PostGetTemplateActionEnumGetTemplate PostGetTemplateActionEnum = "GetTemplate"
)

type PostGetTemplateVersionEnum string

const (
	PostGetTemplateVersionEnumTwoThousandAndTen1201 PostGetTemplateVersionEnum = "2010-12-01"
)

type PostGetTemplateQueryParams struct {
	Action  PostGetTemplateActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostGetTemplateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostGetTemplateRequest struct {
	QueryParams PostGetTemplateQueryParams
	Headers     PostGetTemplateHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetTemplateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
