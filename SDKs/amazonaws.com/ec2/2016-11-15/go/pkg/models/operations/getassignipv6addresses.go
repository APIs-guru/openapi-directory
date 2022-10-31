package operations




type GetAssignIpv6AddressesActionEnum string

const (
    GetAssignIpv6AddressesActionEnumAssignIpv6Addresses GetAssignIpv6AddressesActionEnum = "AssignIpv6Addresses"
)



type GetAssignIpv6AddressesVersionEnum string

const (
    GetAssignIpv6AddressesVersionEnumTwoThousandAndSixteen1115 GetAssignIpv6AddressesVersionEnum = "2016-11-15"
)


type GetAssignIpv6AddressesQueryParams struct {
    Action GetAssignIpv6AddressesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Ipv6AddressCount *int64 `queryParam:"style=form,explode=true,name=Ipv6AddressCount"`
    Ipv6Addresses []string `queryParam:"style=form,explode=true,name=Ipv6Addresses"`
    Ipv6Prefix []string `queryParam:"style=form,explode=true,name=Ipv6Prefix"`
    Ipv6PrefixCount *int64 `queryParam:"style=form,explode=true,name=Ipv6PrefixCount"`
    NetworkInterfaceID string `queryParam:"style=form,explode=true,name=NetworkInterfaceId"`
    Version GetAssignIpv6AddressesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetAssignIpv6AddressesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetAssignIpv6AddressesRequest struct {
    QueryParams GetAssignIpv6AddressesQueryParams 
    Headers GetAssignIpv6AddressesHeaders 
    
}

type GetAssignIpv6AddressesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

