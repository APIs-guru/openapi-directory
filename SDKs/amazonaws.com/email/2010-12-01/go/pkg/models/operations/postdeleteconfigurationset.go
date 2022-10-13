package operations

type PostDeleteConfigurationSetActionEnum string

const (
	PostDeleteConfigurationSetActionEnumDeleteConfigurationSet PostDeleteConfigurationSetActionEnum = "DeleteConfigurationSet"
)

type PostDeleteConfigurationSetVersionEnum string

const (
	PostDeleteConfigurationSetVersionEnumTwoThousandAndTen1201 PostDeleteConfigurationSetVersionEnum = "2010-12-01"
)

type PostDeleteConfigurationSetQueryParams struct {
	Action  PostDeleteConfigurationSetActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteConfigurationSetVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteConfigurationSetHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteConfigurationSetRequest struct {
	QueryParams PostDeleteConfigurationSetQueryParams
	Headers     PostDeleteConfigurationSetHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteConfigurationSetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
