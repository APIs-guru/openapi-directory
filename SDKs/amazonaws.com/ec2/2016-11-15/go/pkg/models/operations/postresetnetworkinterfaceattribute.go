package operations

type PostResetNetworkInterfaceAttributeActionEnum string

const (
	PostResetNetworkInterfaceAttributeActionEnumResetNetworkInterfaceAttribute PostResetNetworkInterfaceAttributeActionEnum = "ResetNetworkInterfaceAttribute"
)

type PostResetNetworkInterfaceAttributeVersionEnum string

const (
	PostResetNetworkInterfaceAttributeVersionEnumTwoThousandAndSixteen1115 PostResetNetworkInterfaceAttributeVersionEnum = "2016-11-15"
)

type PostResetNetworkInterfaceAttributeQueryParams struct {
	Action  PostResetNetworkInterfaceAttributeActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostResetNetworkInterfaceAttributeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostResetNetworkInterfaceAttributeHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostResetNetworkInterfaceAttributeRequest struct {
	QueryParams PostResetNetworkInterfaceAttributeQueryParams
	Headers     PostResetNetworkInterfaceAttributeHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostResetNetworkInterfaceAttributeResponse struct {
	ContentType string
	StatusCode  int64
}
