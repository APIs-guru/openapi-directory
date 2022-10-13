package operations

type PostDeleteConfigurationTemplateActionEnum string

const (
	PostDeleteConfigurationTemplateActionEnumDeleteConfigurationTemplate PostDeleteConfigurationTemplateActionEnum = "DeleteConfigurationTemplate"
)

type PostDeleteConfigurationTemplateVersionEnum string

const (
	PostDeleteConfigurationTemplateVersionEnumTwoThousandAndTen1201 PostDeleteConfigurationTemplateVersionEnum = "2010-12-01"
)

type PostDeleteConfigurationTemplateQueryParams struct {
	Action  PostDeleteConfigurationTemplateActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteConfigurationTemplateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteConfigurationTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteConfigurationTemplateRequest struct {
	QueryParams PostDeleteConfigurationTemplateQueryParams
	Headers     PostDeleteConfigurationTemplateHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteConfigurationTemplateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
