package operations




type PostGetTransitGatewayPrefixListReferencesActionEnum string

const (
    PostGetTransitGatewayPrefixListReferencesActionEnumGetTransitGatewayPrefixListReferences PostGetTransitGatewayPrefixListReferencesActionEnum = "GetTransitGatewayPrefixListReferences"
)



type PostGetTransitGatewayPrefixListReferencesVersionEnum string

const (
    PostGetTransitGatewayPrefixListReferencesVersionEnumTwoThousandAndSixteen1115 PostGetTransitGatewayPrefixListReferencesVersionEnum = "2016-11-15"
)


type PostGetTransitGatewayPrefixListReferencesQueryParams struct {
    Action PostGetTransitGatewayPrefixListReferencesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version PostGetTransitGatewayPrefixListReferencesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostGetTransitGatewayPrefixListReferencesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostGetTransitGatewayPrefixListReferencesRequest struct {
    QueryParams PostGetTransitGatewayPrefixListReferencesQueryParams 
    Headers PostGetTransitGatewayPrefixListReferencesHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostGetTransitGatewayPrefixListReferencesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

