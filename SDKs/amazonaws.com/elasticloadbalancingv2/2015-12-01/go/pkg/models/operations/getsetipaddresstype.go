package operations

type GetSetIPAddressTypeActionEnum string

const (
	GetSetIPAddressTypeActionEnumSetIPAddressType GetSetIPAddressTypeActionEnum = "SetIpAddressType"
)

type GetSetIPAddressTypeIPAddressTypeEnum string

const (
	GetSetIPAddressTypeIPAddressTypeEnumIpv4      GetSetIPAddressTypeIPAddressTypeEnum = "ipv4"
	GetSetIPAddressTypeIPAddressTypeEnumDualstack GetSetIPAddressTypeIPAddressTypeEnum = "dualstack"
)

type GetSetIPAddressTypeVersionEnum string

const (
	GetSetIPAddressTypeVersionEnumTwoThousandAndFifteen1201 GetSetIPAddressTypeVersionEnum = "2015-12-01"
)

type GetSetIPAddressTypeQueryParams struct {
	Action          GetSetIPAddressTypeActionEnum        `queryParam:"style=form,explode=true,name=Action"`
	IPAddressType   GetSetIPAddressTypeIPAddressTypeEnum `queryParam:"style=form,explode=true,name=IpAddressType"`
	LoadBalancerArn string                               `queryParam:"style=form,explode=true,name=LoadBalancerArn"`
	Version         GetSetIPAddressTypeVersionEnum       `queryParam:"style=form,explode=true,name=Version"`
}

type GetSetIPAddressTypeHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetSetIPAddressTypeRequest struct {
	QueryParams GetSetIPAddressTypeQueryParams
	Headers     GetSetIPAddressTypeHeaders
}

type GetSetIPAddressTypeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
