package operations




type GetDeleteUserGroupActionEnum string

const (
    GetDeleteUserGroupActionEnumDeleteUserGroup GetDeleteUserGroupActionEnum = "DeleteUserGroup"
)



type GetDeleteUserGroupVersionEnum string

const (
    GetDeleteUserGroupVersionEnumTwoThousandAndFifteen0202 GetDeleteUserGroupVersionEnum = "2015-02-02"
)


type GetDeleteUserGroupQueryParams struct {
    Action GetDeleteUserGroupActionEnum `queryParam:"style=form,explode=true,name=Action"`
    UserGroupID string `queryParam:"style=form,explode=true,name=UserGroupId"`
    Version GetDeleteUserGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDeleteUserGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeleteUserGroupRequest struct {
    QueryParams GetDeleteUserGroupQueryParams 
    Headers GetDeleteUserGroupHeaders 
    
}

type GetDeleteUserGroupResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

