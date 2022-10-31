package operations




type PostUpdateGroupActionEnum string

const (
    PostUpdateGroupActionEnumUpdateGroup PostUpdateGroupActionEnum = "UpdateGroup"
)



type PostUpdateGroupVersionEnum string

const (
    PostUpdateGroupVersionEnumTwoThousandAndTen0508 PostUpdateGroupVersionEnum = "2010-05-08"
)


type PostUpdateGroupQueryParams struct {
    Action PostUpdateGroupActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostUpdateGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostUpdateGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostUpdateGroupRequest struct {
    QueryParams PostUpdateGroupQueryParams 
    Headers PostUpdateGroupHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostUpdateGroupResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

