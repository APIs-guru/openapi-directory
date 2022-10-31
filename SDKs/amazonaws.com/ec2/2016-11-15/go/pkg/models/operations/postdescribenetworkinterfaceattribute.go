package operations

type PostDescribeNetworkInterfaceAttributeActionEnum string

const (
	PostDescribeNetworkInterfaceAttributeActionEnumDescribeNetworkInterfaceAttribute PostDescribeNetworkInterfaceAttributeActionEnum = "DescribeNetworkInterfaceAttribute"
)

type PostDescribeNetworkInterfaceAttributeVersionEnum string

const (
	PostDescribeNetworkInterfaceAttributeVersionEnumTwoThousandAndSixteen1115 PostDescribeNetworkInterfaceAttributeVersionEnum = "2016-11-15"
)

type PostDescribeNetworkInterfaceAttributeQueryParams struct {
	Action  PostDescribeNetworkInterfaceAttributeActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeNetworkInterfaceAttributeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeNetworkInterfaceAttributeHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeNetworkInterfaceAttributeRequest struct {
	QueryParams PostDescribeNetworkInterfaceAttributeQueryParams
	Headers     PostDescribeNetworkInterfaceAttributeHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeNetworkInterfaceAttributeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
