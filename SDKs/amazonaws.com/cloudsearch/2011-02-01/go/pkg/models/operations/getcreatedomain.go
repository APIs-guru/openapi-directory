package operations




type GetCreateDomainActionEnum string

const (
    GetCreateDomainActionEnumCreateDomain GetCreateDomainActionEnum = "CreateDomain"
)



type GetCreateDomainVersionEnum string

const (
    GetCreateDomainVersionEnumTwoThousandAndEleven0201 GetCreateDomainVersionEnum = "2011-02-01"
)


type GetCreateDomainQueryParams struct {
    Action GetCreateDomainActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DomainName string `queryParam:"style=form,explode=true,name=DomainName"`
    Version GetCreateDomainVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetCreateDomainHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetCreateDomainRequest struct {
    QueryParams GetCreateDomainQueryParams 
    Headers GetCreateDomainHeaders 
    
}

type GetCreateDomainResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

