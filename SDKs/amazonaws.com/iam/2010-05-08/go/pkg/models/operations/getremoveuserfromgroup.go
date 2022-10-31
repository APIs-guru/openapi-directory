package operations




type GetRemoveUserFromGroupActionEnum string

const (
    GetRemoveUserFromGroupActionEnumRemoveUserFromGroup GetRemoveUserFromGroupActionEnum = "RemoveUserFromGroup"
)



type GetRemoveUserFromGroupVersionEnum string

const (
    GetRemoveUserFromGroupVersionEnumTwoThousandAndTen0508 GetRemoveUserFromGroupVersionEnum = "2010-05-08"
)


type GetRemoveUserFromGroupQueryParams struct {
    Action GetRemoveUserFromGroupActionEnum `queryParam:"style=form,explode=true,name=Action"`
    GroupName string `queryParam:"style=form,explode=true,name=GroupName"`
    UserName string `queryParam:"style=form,explode=true,name=UserName"`
    Version GetRemoveUserFromGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetRemoveUserFromGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetRemoveUserFromGroupRequest struct {
    QueryParams GetRemoveUserFromGroupQueryParams 
    Headers GetRemoveUserFromGroupHeaders 
    
}

type GetRemoveUserFromGroupResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

