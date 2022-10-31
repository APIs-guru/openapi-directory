package operations




type PostDetachNetworkInterfaceActionEnum string

const (
    PostDetachNetworkInterfaceActionEnumDetachNetworkInterface PostDetachNetworkInterfaceActionEnum = "DetachNetworkInterface"
)



type PostDetachNetworkInterfaceVersionEnum string

const (
    PostDetachNetworkInterfaceVersionEnumTwoThousandAndSixteen1115 PostDetachNetworkInterfaceVersionEnum = "2016-11-15"
)


type PostDetachNetworkInterfaceQueryParams struct {
    Action PostDetachNetworkInterfaceActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDetachNetworkInterfaceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDetachNetworkInterfaceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDetachNetworkInterfaceRequest struct {
    QueryParams PostDetachNetworkInterfaceQueryParams 
    Headers PostDetachNetworkInterfaceHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDetachNetworkInterfaceResponse struct {
    ContentType string 
    StatusCode int64 
    
}

