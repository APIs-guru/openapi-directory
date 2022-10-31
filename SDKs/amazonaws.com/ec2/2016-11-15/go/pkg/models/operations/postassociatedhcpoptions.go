package operations




type PostAssociateDhcpOptionsActionEnum string

const (
    PostAssociateDhcpOptionsActionEnumAssociateDhcpOptions PostAssociateDhcpOptionsActionEnum = "AssociateDhcpOptions"
)



type PostAssociateDhcpOptionsVersionEnum string

const (
    PostAssociateDhcpOptionsVersionEnumTwoThousandAndSixteen1115 PostAssociateDhcpOptionsVersionEnum = "2016-11-15"
)


type PostAssociateDhcpOptionsQueryParams struct {
    Action PostAssociateDhcpOptionsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostAssociateDhcpOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostAssociateDhcpOptionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostAssociateDhcpOptionsRequest struct {
    QueryParams PostAssociateDhcpOptionsQueryParams 
    Headers PostAssociateDhcpOptionsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostAssociateDhcpOptionsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

