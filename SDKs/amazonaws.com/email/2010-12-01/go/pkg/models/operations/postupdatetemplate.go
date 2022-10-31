package operations

type PostUpdateTemplateActionEnum string

const (
	PostUpdateTemplateActionEnumUpdateTemplate PostUpdateTemplateActionEnum = "UpdateTemplate"
)

type PostUpdateTemplateVersionEnum string

const (
	PostUpdateTemplateVersionEnumTwoThousandAndTen1201 PostUpdateTemplateVersionEnum = "2010-12-01"
)

type PostUpdateTemplateQueryParams struct {
	Action  PostUpdateTemplateActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostUpdateTemplateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostUpdateTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostUpdateTemplateRequest struct {
	QueryParams PostUpdateTemplateQueryParams
	Headers     PostUpdateTemplateHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostUpdateTemplateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
