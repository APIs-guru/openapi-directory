package operations




type PostModifyUserGroupActionEnum string

const (
    PostModifyUserGroupActionEnumModifyUserGroup PostModifyUserGroupActionEnum = "ModifyUserGroup"
)



type PostModifyUserGroupVersionEnum string

const (
    PostModifyUserGroupVersionEnumTwoThousandAndFifteen0202 PostModifyUserGroupVersionEnum = "2015-02-02"
)


type PostModifyUserGroupQueryParams struct {
    Action PostModifyUserGroupActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostModifyUserGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostModifyUserGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostModifyUserGroupRequest struct {
    QueryParams PostModifyUserGroupQueryParams 
    Headers PostModifyUserGroupHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostModifyUserGroupResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

