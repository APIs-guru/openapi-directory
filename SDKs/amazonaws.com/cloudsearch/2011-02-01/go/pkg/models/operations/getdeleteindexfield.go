package operations




type GetDeleteIndexFieldActionEnum string

const (
    GetDeleteIndexFieldActionEnumDeleteIndexField GetDeleteIndexFieldActionEnum = "DeleteIndexField"
)



type GetDeleteIndexFieldVersionEnum string

const (
    GetDeleteIndexFieldVersionEnumTwoThousandAndEleven0201 GetDeleteIndexFieldVersionEnum = "2011-02-01"
)


type GetDeleteIndexFieldQueryParams struct {
    Action GetDeleteIndexFieldActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DomainName string `queryParam:"style=form,explode=true,name=DomainName"`
    IndexFieldName string `queryParam:"style=form,explode=true,name=IndexFieldName"`
    Version GetDeleteIndexFieldVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDeleteIndexFieldHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeleteIndexFieldRequest struct {
    QueryParams GetDeleteIndexFieldQueryParams 
    Headers GetDeleteIndexFieldHeaders 
    
}

type GetDeleteIndexFieldResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

