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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
