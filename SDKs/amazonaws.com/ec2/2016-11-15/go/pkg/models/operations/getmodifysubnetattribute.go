package operations

type GetModifySubnetAttributeActionEnum string

const (
	GetModifySubnetAttributeActionEnumModifySubnetAttribute GetModifySubnetAttributeActionEnum = "ModifySubnetAttribute"
)

// GetModifySubnetAttributeAssignIpv6AddressOnCreation
// Describes a value for a resource attribute that is a Boolean value.
type GetModifySubnetAttributeAssignIpv6AddressOnCreation struct {
	Value *bool `queryParam:"name=Value"`
}

// GetModifySubnetAttributeMapCustomerOwnedIPOnLaunch
// Describes a value for a resource attribute that is a Boolean value.
type GetModifySubnetAttributeMapCustomerOwnedIPOnLaunch struct {
	Value *bool `queryParam:"name=Value"`
}

// GetModifySubnetAttributeMapPublicIPOnLaunch
// Describes a value for a resource attribute that is a Boolean value.
type GetModifySubnetAttributeMapPublicIPOnLaunch struct {
	Value *bool `queryParam:"name=Value"`
}

type GetModifySubnetAttributeVersionEnum string

const (
	GetModifySubnetAttributeVersionEnumTwoThousandAndSixteen1115 GetModifySubnetAttributeVersionEnum = "2016-11-15"
)

type GetModifySubnetAttributeQueryParams struct {
	Action                      GetModifySubnetAttributeActionEnum                   `queryParam:"style=form,explode=true,name=Action"`
	AssignIpv6AddressOnCreation *GetModifySubnetAttributeAssignIpv6AddressOnCreation `queryParam:"style=form,explode=true,name=AssignIpv6AddressOnCreation"`
	CustomerOwnedIpv4Pool       *string                                              `queryParam:"style=form,explode=true,name=CustomerOwnedIpv4Pool"`
	MapCustomerOwnedIPOnLaunch  *GetModifySubnetAttributeMapCustomerOwnedIPOnLaunch  `queryParam:"style=form,explode=true,name=MapCustomerOwnedIpOnLaunch"`
	MapPublicIPOnLaunch         *GetModifySubnetAttributeMapPublicIPOnLaunch         `queryParam:"style=form,explode=true,name=MapPublicIpOnLaunch"`
	SubnetID                    string                                               `queryParam:"style=form,explode=true,name=SubnetId"`
	Version                     GetModifySubnetAttributeVersionEnum                  `queryParam:"style=form,explode=true,name=Version"`
}

type GetModifySubnetAttributeHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetModifySubnetAttributeRequest struct {
	QueryParams GetModifySubnetAttributeQueryParams
	Headers     GetModifySubnetAttributeHeaders
}

type GetModifySubnetAttributeResponse struct {
	ContentType string
	StatusCode  int64
}
