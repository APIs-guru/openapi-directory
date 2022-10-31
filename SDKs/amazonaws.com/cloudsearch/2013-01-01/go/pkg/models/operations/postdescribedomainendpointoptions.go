package operations




type PostDescribeDomainEndpointOptionsActionEnum string

const (
    PostDescribeDomainEndpointOptionsActionEnumDescribeDomainEndpointOptions PostDescribeDomainEndpointOptionsActionEnum = "DescribeDomainEndpointOptions"
)



type PostDescribeDomainEndpointOptionsVersionEnum string

const (
    PostDescribeDomainEndpointOptionsVersionEnumTwoThousandAndThirteen0101 PostDescribeDomainEndpointOptionsVersionEnum = "2013-01-01"
)


type PostDescribeDomainEndpointOptionsQueryParams struct {
    Action PostDescribeDomainEndpointOptionsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDescribeDomainEndpointOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeDomainEndpointOptionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeDomainEndpointOptionsRequest struct {
    QueryParams PostDescribeDomainEndpointOptionsQueryParams 
    Headers PostDescribeDomainEndpointOptionsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeDomainEndpointOptionsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

