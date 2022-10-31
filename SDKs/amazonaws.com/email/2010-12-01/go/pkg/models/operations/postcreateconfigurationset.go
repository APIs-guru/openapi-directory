package operations

type PostCreateConfigurationSetActionEnum string

const (
	PostCreateConfigurationSetActionEnumCreateConfigurationSet PostCreateConfigurationSetActionEnum = "CreateConfigurationSet"
)

type PostCreateConfigurationSetVersionEnum string

const (
	PostCreateConfigurationSetVersionEnumTwoThousandAndTen1201 PostCreateConfigurationSetVersionEnum = "2010-12-01"
)

type PostCreateConfigurationSetQueryParams struct {
	Action  PostCreateConfigurationSetActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateConfigurationSetVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateConfigurationSetHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostCreateConfigurationSetRequest struct {
	QueryParams PostCreateConfigurationSetQueryParams
	Headers     PostCreateConfigurationSetHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateConfigurationSetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
