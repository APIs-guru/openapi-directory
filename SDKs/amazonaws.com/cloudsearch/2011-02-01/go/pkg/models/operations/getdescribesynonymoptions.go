package operations




type GetDescribeSynonymOptionsActionEnum string

const (
    GetDescribeSynonymOptionsActionEnumDescribeSynonymOptions GetDescribeSynonymOptionsActionEnum = "DescribeSynonymOptions"
)



type GetDescribeSynonymOptionsVersionEnum string

const (
    GetDescribeSynonymOptionsVersionEnumTwoThousandAndEleven0201 GetDescribeSynonymOptionsVersionEnum = "2011-02-01"
)


type GetDescribeSynonymOptionsQueryParams struct {
    Action GetDescribeSynonymOptionsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DomainName string `queryParam:"style=form,explode=true,name=DomainName"`
    Version GetDescribeSynonymOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDescribeSynonymOptionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDescribeSynonymOptionsRequest struct {
    QueryParams GetDescribeSynonymOptionsQueryParams 
    Headers GetDescribeSynonymOptionsHeaders 
    
}

type GetDescribeSynonymOptionsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

