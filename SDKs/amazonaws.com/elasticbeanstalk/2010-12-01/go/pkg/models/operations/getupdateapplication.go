package operations




type GetUpdateApplicationActionEnum string

const (
    GetUpdateApplicationActionEnumUpdateApplication GetUpdateApplicationActionEnum = "UpdateApplication"
)



type GetUpdateApplicationVersionEnum string

const (
    GetUpdateApplicationVersionEnumTwoThousandAndTen1201 GetUpdateApplicationVersionEnum = "2010-12-01"
)


type GetUpdateApplicationQueryParams struct {
    Action GetUpdateApplicationActionEnum `queryParam:"style=form,explode=true,name=Action"`
    ApplicationName string `queryParam:"style=form,explode=true,name=ApplicationName"`
    Description *string `queryParam:"style=form,explode=true,name=Description"`
    Version GetUpdateApplicationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetUpdateApplicationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetUpdateApplicationRequest struct {
    QueryParams GetUpdateApplicationQueryParams 
    Headers GetUpdateApplicationHeaders 
    
}

type GetUpdateApplicationResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

