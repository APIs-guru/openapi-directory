package operations




type PostRemoveUserFromGroupActionEnum string

const (
    PostRemoveUserFromGroupActionEnumRemoveUserFromGroup PostRemoveUserFromGroupActionEnum = "RemoveUserFromGroup"
)



type PostRemoveUserFromGroupVersionEnum string

const (
    PostRemoveUserFromGroupVersionEnumTwoThousandAndTen0508 PostRemoveUserFromGroupVersionEnum = "2010-05-08"
)


type PostRemoveUserFromGroupQueryParams struct {
    Action PostRemoveUserFromGroupActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostRemoveUserFromGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostRemoveUserFromGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostRemoveUserFromGroupRequest struct {
    QueryParams PostRemoveUserFromGroupQueryParams 
    Headers PostRemoveUserFromGroupHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostRemoveUserFromGroupResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

