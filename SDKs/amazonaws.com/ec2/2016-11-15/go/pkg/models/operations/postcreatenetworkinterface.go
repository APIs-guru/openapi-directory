package operations

type PostCreateNetworkInterfaceActionEnum string

const (
	PostCreateNetworkInterfaceActionEnumCreateNetworkInterface PostCreateNetworkInterfaceActionEnum = "CreateNetworkInterface"
)

type PostCreateNetworkInterfaceVersionEnum string

const (
	PostCreateNetworkInterfaceVersionEnumTwoThousandAndSixteen1115 PostCreateNetworkInterfaceVersionEnum = "2016-11-15"
)

type PostCreateNetworkInterfaceQueryParams struct {
	Action  PostCreateNetworkInterfaceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateNetworkInterfaceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateNetworkInterfaceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateNetworkInterfaceRequest struct {
	QueryParams PostCreateNetworkInterfaceQueryParams
	Headers     PostCreateNetworkInterfaceHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateNetworkInterfaceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
