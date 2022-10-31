package operations




type GetListGroupsForUserActionEnum string

const (
    GetListGroupsForUserActionEnumListGroupsForUser GetListGroupsForUserActionEnum = "ListGroupsForUser"
)



type GetListGroupsForUserVersionEnum string

const (
    GetListGroupsForUserVersionEnumTwoThousandAndTen0508 GetListGroupsForUserVersionEnum = "2010-05-08"
)


type GetListGroupsForUserQueryParams struct {
    Action GetListGroupsForUserActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxItems *int64 `queryParam:"style=form,explode=true,name=MaxItems"`
    UserName string `queryParam:"style=form,explode=true,name=UserName"`
    Version GetListGroupsForUserVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetListGroupsForUserHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetListGroupsForUserRequest struct {
    QueryParams GetListGroupsForUserQueryParams 
    Headers GetListGroupsForUserHeaders 
    
}

type GetListGroupsForUserResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

