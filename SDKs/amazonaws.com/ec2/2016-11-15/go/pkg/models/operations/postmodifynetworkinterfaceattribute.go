package operations

type PostModifyNetworkInterfaceAttributeActionEnum string

const (
	PostModifyNetworkInterfaceAttributeActionEnumModifyNetworkInterfaceAttribute PostModifyNetworkInterfaceAttributeActionEnum = "ModifyNetworkInterfaceAttribute"
)

type PostModifyNetworkInterfaceAttributeVersionEnum string

const (
	PostModifyNetworkInterfaceAttributeVersionEnumTwoThousandAndSixteen1115 PostModifyNetworkInterfaceAttributeVersionEnum = "2016-11-15"
)

type PostModifyNetworkInterfaceAttributeQueryParams struct {
	Action  PostModifyNetworkInterfaceAttributeActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyNetworkInterfaceAttributeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyNetworkInterfaceAttributeHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostModifyNetworkInterfaceAttributeRequest struct {
	QueryParams PostModifyNetworkInterfaceAttributeQueryParams
	Headers     PostModifyNetworkInterfaceAttributeHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyNetworkInterfaceAttributeResponse struct {
	ContentType string
	StatusCode  int64
}
