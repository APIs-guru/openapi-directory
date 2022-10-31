package operations

type PostCreateConfigurationTemplateActionEnum string

const (
	PostCreateConfigurationTemplateActionEnumCreateConfigurationTemplate PostCreateConfigurationTemplateActionEnum = "CreateConfigurationTemplate"
)

type PostCreateConfigurationTemplateVersionEnum string

const (
	PostCreateConfigurationTemplateVersionEnumTwoThousandAndTen1201 PostCreateConfigurationTemplateVersionEnum = "2010-12-01"
)

type PostCreateConfigurationTemplateQueryParams struct {
	Action  PostCreateConfigurationTemplateActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateConfigurationTemplateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateConfigurationTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostCreateConfigurationTemplateRequest struct {
	QueryParams PostCreateConfigurationTemplateQueryParams
	Headers     PostCreateConfigurationTemplateHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateConfigurationTemplateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
