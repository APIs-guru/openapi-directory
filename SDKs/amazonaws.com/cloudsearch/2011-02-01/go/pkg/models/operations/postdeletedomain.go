package operations




type PostDeleteDomainActionEnum string

const (
    PostDeleteDomainActionEnumDeleteDomain PostDeleteDomainActionEnum = "DeleteDomain"
)



type PostDeleteDomainVersionEnum string

const (
    PostDeleteDomainVersionEnumTwoThousandAndEleven0201 PostDeleteDomainVersionEnum = "2011-02-01"
)


type PostDeleteDomainQueryParams struct {
    Action PostDeleteDomainActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteDomainVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteDomainHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteDomainRequest struct {
    QueryParams PostDeleteDomainQueryParams 
    Headers PostDeleteDomainHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteDomainResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

