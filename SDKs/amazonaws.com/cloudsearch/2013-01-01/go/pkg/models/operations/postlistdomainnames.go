package operations




type PostListDomainNamesActionEnum string

const (
    PostListDomainNamesActionEnumListDomainNames PostListDomainNamesActionEnum = "ListDomainNames"
)



type PostListDomainNamesVersionEnum string

const (
    PostListDomainNamesVersionEnumTwoThousandAndThirteen0101 PostListDomainNamesVersionEnum = "2013-01-01"
)


type PostListDomainNamesQueryParams struct {
    Action PostListDomainNamesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostListDomainNamesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostListDomainNamesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostListDomainNamesRequest struct {
    QueryParams PostListDomainNamesQueryParams 
    Headers PostListDomainNamesHeaders 
    
}

type PostListDomainNamesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

