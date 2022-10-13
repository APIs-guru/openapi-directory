package operations

type PostAttachNetworkInterfaceActionEnum string

const (
	PostAttachNetworkInterfaceActionEnumAttachNetworkInterface PostAttachNetworkInterfaceActionEnum = "AttachNetworkInterface"
)

type PostAttachNetworkInterfaceVersionEnum string

const (
	PostAttachNetworkInterfaceVersionEnumTwoThousandAndSixteen1115 PostAttachNetworkInterfaceVersionEnum = "2016-11-15"
)

type PostAttachNetworkInterfaceQueryParams struct {
	Action  PostAttachNetworkInterfaceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAttachNetworkInterfaceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAttachNetworkInterfaceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostAttachNetworkInterfaceRequest struct {
	QueryParams PostAttachNetworkInterfaceQueryParams
	Headers     PostAttachNetworkInterfaceHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAttachNetworkInterfaceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
