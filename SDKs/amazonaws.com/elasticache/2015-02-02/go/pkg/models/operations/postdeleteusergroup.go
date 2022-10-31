package operations




type PostDeleteUserGroupActionEnum string

const (
    PostDeleteUserGroupActionEnumDeleteUserGroup PostDeleteUserGroupActionEnum = "DeleteUserGroup"
)



type PostDeleteUserGroupVersionEnum string

const (
    PostDeleteUserGroupVersionEnumTwoThousandAndFifteen0202 PostDeleteUserGroupVersionEnum = "2015-02-02"
)


type PostDeleteUserGroupQueryParams struct {
    Action PostDeleteUserGroupActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteUserGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteUserGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteUserGroupRequest struct {
    QueryParams PostDeleteUserGroupQueryParams 
    Headers PostDeleteUserGroupHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteUserGroupResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

