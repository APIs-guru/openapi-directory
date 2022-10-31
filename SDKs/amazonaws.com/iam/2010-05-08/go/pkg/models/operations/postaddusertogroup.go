package operations




type PostAddUserToGroupActionEnum string

const (
    PostAddUserToGroupActionEnumAddUserToGroup PostAddUserToGroupActionEnum = "AddUserToGroup"
)



type PostAddUserToGroupVersionEnum string

const (
    PostAddUserToGroupVersionEnumTwoThousandAndTen0508 PostAddUserToGroupVersionEnum = "2010-05-08"
)


type PostAddUserToGroupQueryParams struct {
    Action PostAddUserToGroupActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostAddUserToGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostAddUserToGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostAddUserToGroupRequest struct {
    QueryParams PostAddUserToGroupQueryParams 
    Headers PostAddUserToGroupHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostAddUserToGroupResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

