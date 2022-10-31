package operations




type GetListUsersActionEnum string

const (
    GetListUsersActionEnumListUsers GetListUsersActionEnum = "ListUsers"
)



type GetListUsersVersionEnum string

const (
    GetListUsersVersionEnumTwoThousandAndTen0508 GetListUsersVersionEnum = "2010-05-08"
)


type GetListUsersQueryParams struct {
    Action GetListUsersActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxItems *int64 `queryParam:"style=form,explode=true,name=MaxItems"`
    PathPrefix *string `queryParam:"style=form,explode=true,name=PathPrefix"`
    Version GetListUsersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetListUsersHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetListUsersRequest struct {
    QueryParams GetListUsersQueryParams 
    Headers GetListUsersHeaders 
    
}

type GetListUsersResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

