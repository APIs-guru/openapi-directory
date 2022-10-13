package operations

type PostDeleteTemplateActionEnum string

const (
	PostDeleteTemplateActionEnumDeleteTemplate PostDeleteTemplateActionEnum = "DeleteTemplate"
)

type PostDeleteTemplateVersionEnum string

const (
	PostDeleteTemplateVersionEnumTwoThousandAndTen1201 PostDeleteTemplateVersionEnum = "2010-12-01"
)

type PostDeleteTemplateQueryParams struct {
	Action  PostDeleteTemplateActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteTemplateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteTemplateRequest struct {
	QueryParams PostDeleteTemplateQueryParams
	Headers     PostDeleteTemplateHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteTemplateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
