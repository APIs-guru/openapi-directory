package operations

type PostCreateDhcpOptionsActionEnum string

const (
	PostCreateDhcpOptionsActionEnumCreateDhcpOptions PostCreateDhcpOptionsActionEnum = "CreateDhcpOptions"
)

type PostCreateDhcpOptionsVersionEnum string

const (
	PostCreateDhcpOptionsVersionEnumTwoThousandAndSixteen1115 PostCreateDhcpOptionsVersionEnum = "2016-11-15"
)

type PostCreateDhcpOptionsQueryParams struct {
	Action  PostCreateDhcpOptionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateDhcpOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateDhcpOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateDhcpOptionsRequest struct {
	QueryParams PostCreateDhcpOptionsQueryParams
	Headers     PostCreateDhcpOptionsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateDhcpOptionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
