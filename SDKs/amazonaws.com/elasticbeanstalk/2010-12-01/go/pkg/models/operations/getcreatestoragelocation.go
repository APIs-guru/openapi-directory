package operations




type GetCreateStorageLocationActionEnum string

const (
    GetCreateStorageLocationActionEnumCreateStorageLocation GetCreateStorageLocationActionEnum = "CreateStorageLocation"
)



type GetCreateStorageLocationVersionEnum string

const (
    GetCreateStorageLocationVersionEnumTwoThousandAndTen1201 GetCreateStorageLocationVersionEnum = "2010-12-01"
)


type GetCreateStorageLocationQueryParams struct {
    Action GetCreateStorageLocationActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version GetCreateStorageLocationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetCreateStorageLocationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetCreateStorageLocationRequest struct {
    QueryParams GetCreateStorageLocationQueryParams 
    Headers GetCreateStorageLocationHeaders 
    
}

type GetCreateStorageLocationResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

