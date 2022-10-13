package operations

type PostDeleteNetworkInterfaceActionEnum string

const (
	PostDeleteNetworkInterfaceActionEnumDeleteNetworkInterface PostDeleteNetworkInterfaceActionEnum = "DeleteNetworkInterface"
)

type PostDeleteNetworkInterfaceVersionEnum string

const (
	PostDeleteNetworkInterfaceVersionEnumTwoThousandAndSixteen1115 PostDeleteNetworkInterfaceVersionEnum = "2016-11-15"
)

type PostDeleteNetworkInterfaceQueryParams struct {
	Action  PostDeleteNetworkInterfaceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteNetworkInterfaceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteNetworkInterfaceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteNetworkInterfaceRequest struct {
	QueryParams PostDeleteNetworkInterfaceQueryParams
	Headers     PostDeleteNetworkInterfaceHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteNetworkInterfaceResponse struct {
	ContentType string
	StatusCode  int64
}
