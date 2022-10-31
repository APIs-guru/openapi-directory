package operations




type PostRemoveRoleFromInstanceProfileActionEnum string

const (
    PostRemoveRoleFromInstanceProfileActionEnumRemoveRoleFromInstanceProfile PostRemoveRoleFromInstanceProfileActionEnum = "RemoveRoleFromInstanceProfile"
)



type PostRemoveRoleFromInstanceProfileVersionEnum string

const (
    PostRemoveRoleFromInstanceProfileVersionEnumTwoThousandAndTen0508 PostRemoveRoleFromInstanceProfileVersionEnum = "2010-05-08"
)


type PostRemoveRoleFromInstanceProfileQueryParams struct {
    Action PostRemoveRoleFromInstanceProfileActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostRemoveRoleFromInstanceProfileVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostRemoveRoleFromInstanceProfileHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostRemoveRoleFromInstanceProfileRequest struct {
    QueryParams PostRemoveRoleFromInstanceProfileQueryParams 
    Headers PostRemoveRoleFromInstanceProfileHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostRemoveRoleFromInstanceProfileResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

