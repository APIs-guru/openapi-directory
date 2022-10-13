package operations

type PostDeleteDhcpOptionsActionEnum string

const (
	PostDeleteDhcpOptionsActionEnumDeleteDhcpOptions PostDeleteDhcpOptionsActionEnum = "DeleteDhcpOptions"
)

type PostDeleteDhcpOptionsVersionEnum string

const (
	PostDeleteDhcpOptionsVersionEnumTwoThousandAndSixteen1115 PostDeleteDhcpOptionsVersionEnum = "2016-11-15"
)

type PostDeleteDhcpOptionsQueryParams struct {
	Action  PostDeleteDhcpOptionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteDhcpOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteDhcpOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteDhcpOptionsRequest struct {
	QueryParams PostDeleteDhcpOptionsQueryParams
	Headers     PostDeleteDhcpOptionsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteDhcpOptionsResponse struct {
	ContentType string
	StatusCode  int64
}
