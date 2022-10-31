package operations

type GetDescribeNetworkInterfaceAttributeActionEnum string

const (
	GetDescribeNetworkInterfaceAttributeActionEnumDescribeNetworkInterfaceAttribute GetDescribeNetworkInterfaceAttributeActionEnum = "DescribeNetworkInterfaceAttribute"
)

type GetDescribeNetworkInterfaceAttributeAttributeEnum string

const (
	GetDescribeNetworkInterfaceAttributeAttributeEnumDescription     GetDescribeNetworkInterfaceAttributeAttributeEnum = "description"
	GetDescribeNetworkInterfaceAttributeAttributeEnumGroupSet        GetDescribeNetworkInterfaceAttributeAttributeEnum = "groupSet"
	GetDescribeNetworkInterfaceAttributeAttributeEnumSourceDestCheck GetDescribeNetworkInterfaceAttributeAttributeEnum = "sourceDestCheck"
	GetDescribeNetworkInterfaceAttributeAttributeEnumAttachment      GetDescribeNetworkInterfaceAttributeAttributeEnum = "attachment"
)

type GetDescribeNetworkInterfaceAttributeVersionEnum string

const (
	GetDescribeNetworkInterfaceAttributeVersionEnumTwoThousandAndSixteen1115 GetDescribeNetworkInterfaceAttributeVersionEnum = "2016-11-15"
)

type GetDescribeNetworkInterfaceAttributeQueryParams struct {
	Action             GetDescribeNetworkInterfaceAttributeActionEnum     `queryParam:"style=form,explode=true,name=Action"`
	Attribute          *GetDescribeNetworkInterfaceAttributeAttributeEnum `queryParam:"style=form,explode=true,name=Attribute"`
	DryRun             *bool                                              `queryParam:"style=form,explode=true,name=DryRun"`
	NetworkInterfaceID string                                             `queryParam:"style=form,explode=true,name=NetworkInterfaceId"`
	Version            GetDescribeNetworkInterfaceAttributeVersionEnum    `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeNetworkInterfaceAttributeHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDescribeNetworkInterfaceAttributeRequest struct {
	QueryParams GetDescribeNetworkInterfaceAttributeQueryParams
	Headers     GetDescribeNetworkInterfaceAttributeHeaders
}

type GetDescribeNetworkInterfaceAttributeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
