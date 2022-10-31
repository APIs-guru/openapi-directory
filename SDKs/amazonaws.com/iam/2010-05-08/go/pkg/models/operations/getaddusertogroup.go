package operations




type GetAddUserToGroupActionEnum string

const (
    GetAddUserToGroupActionEnumAddUserToGroup GetAddUserToGroupActionEnum = "AddUserToGroup"
)



type GetAddUserToGroupVersionEnum string

const (
    GetAddUserToGroupVersionEnumTwoThousandAndTen0508 GetAddUserToGroupVersionEnum = "2010-05-08"
)


type GetAddUserToGroupQueryParams struct {
    Action GetAddUserToGroupActionEnum `queryParam:"style=form,explode=true,name=Action"`
    GroupName string `queryParam:"style=form,explode=true,name=GroupName"`
    UserName string `queryParam:"style=form,explode=true,name=UserName"`
    Version GetAddUserToGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetAddUserToGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetAddUserToGroupRequest struct {
    QueryParams GetAddUserToGroupQueryParams 
    Headers GetAddUserToGroupHeaders 
    
}

type GetAddUserToGroupResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

