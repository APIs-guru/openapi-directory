package operations

type PostDetachNetworkInterfaceActionEnum string

const (
	PostDetachNetworkInterfaceActionEnumDetachNetworkInterface PostDetachNetworkInterfaceActionEnum = "DetachNetworkInterface"
)

type PostDetachNetworkInterfaceVersionEnum string

const (
	PostDetachNetworkInterfaceVersionEnumTwoThousandAndSixteen1115 PostDetachNetworkInterfaceVersionEnum = "2016-11-15"
)

type PostDetachNetworkInterfaceQueryParams struct {
	Action  PostDetachNetworkInterfaceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDetachNetworkInterfaceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDetachNetworkInterfaceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDetachNetworkInterfaceRequest struct {
	QueryParams PostDetachNetworkInterfaceQueryParams
	Headers     PostDetachNetworkInterfaceHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDetachNetworkInterfaceResponse struct {
	ContentType string
	StatusCode  int64
}
