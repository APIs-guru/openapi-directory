package operations

type GetModifyVpcAttributeActionEnum string

const (
	GetModifyVpcAttributeActionEnumModifyVpcAttribute GetModifyVpcAttributeActionEnum = "ModifyVpcAttribute"
)

type GetModifyVpcAttributeEnableDNSHostnames struct {
	Value *bool `queryParam:"name=Value"`
}

type GetModifyVpcAttributeEnableDNSSupport struct {
	Value *bool `queryParam:"name=Value"`
}

type GetModifyVpcAttributeVersionEnum string

const (
	GetModifyVpcAttributeVersionEnumTwoThousandAndSixteen1115 GetModifyVpcAttributeVersionEnum = "2016-11-15"
)

type GetModifyVpcAttributeQueryParams struct {
	Action             GetModifyVpcAttributeActionEnum          `queryParam:"style=form,explode=true,name=Action"`
	EnableDNSHostnames *GetModifyVpcAttributeEnableDNSHostnames `queryParam:"style=form,explode=true,name=EnableDnsHostnames"`
	EnableDNSSupport   *GetModifyVpcAttributeEnableDNSSupport   `queryParam:"style=form,explode=true,name=EnableDnsSupport"`
	Version            GetModifyVpcAttributeVersionEnum         `queryParam:"style=form,explode=true,name=Version"`
	VpcID              string                                   `queryParam:"style=form,explode=true,name=VpcId"`
}

type GetModifyVpcAttributeHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetModifyVpcAttributeRequest struct {
	QueryParams GetModifyVpcAttributeQueryParams
	Headers     GetModifyVpcAttributeHeaders
}

type GetModifyVpcAttributeResponse struct {
	ContentType string
	StatusCode  int64
}
