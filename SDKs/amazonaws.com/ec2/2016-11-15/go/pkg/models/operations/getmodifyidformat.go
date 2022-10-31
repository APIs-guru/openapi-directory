package operations




type GetModifyIDFormatActionEnum string

const (
    GetModifyIDFormatActionEnumModifyIDFormat GetModifyIDFormatActionEnum = "ModifyIdFormat"
)



type GetModifyIDFormatVersionEnum string

const (
    GetModifyIDFormatVersionEnumTwoThousandAndSixteen1115 GetModifyIDFormatVersionEnum = "2016-11-15"
)


type GetModifyIDFormatQueryParams struct {
    Action GetModifyIDFormatActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Resource string `queryParam:"style=form,explode=true,name=Resource"`
    UseLongIds bool `queryParam:"style=form,explode=true,name=UseLongIds"`
    Version GetModifyIDFormatVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetModifyIDFormatHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetModifyIDFormatRequest struct {
    QueryParams GetModifyIDFormatQueryParams 
    Headers GetModifyIDFormatHeaders 
    
}

type GetModifyIDFormatResponse struct {
    ContentType string 
    StatusCode int64 
    
}

