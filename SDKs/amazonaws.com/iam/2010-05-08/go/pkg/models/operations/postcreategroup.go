package operations




type PostCreateGroupActionEnum string

const (
    PostCreateGroupActionEnumCreateGroup PostCreateGroupActionEnum = "CreateGroup"
)



type PostCreateGroupVersionEnum string

const (
    PostCreateGroupVersionEnumTwoThousandAndTen0508 PostCreateGroupVersionEnum = "2010-05-08"
)


type PostCreateGroupQueryParams struct {
    Action PostCreateGroupActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCreateGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCreateGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCreateGroupRequest struct {
    QueryParams PostCreateGroupQueryParams 
    Headers PostCreateGroupHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCreateGroupResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

