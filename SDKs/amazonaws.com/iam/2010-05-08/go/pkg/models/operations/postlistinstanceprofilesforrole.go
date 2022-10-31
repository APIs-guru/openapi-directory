package operations




type PostListInstanceProfilesForRoleActionEnum string

const (
    PostListInstanceProfilesForRoleActionEnumListInstanceProfilesForRole PostListInstanceProfilesForRoleActionEnum = "ListInstanceProfilesForRole"
)



type PostListInstanceProfilesForRoleVersionEnum string

const (
    PostListInstanceProfilesForRoleVersionEnumTwoThousandAndTen0508 PostListInstanceProfilesForRoleVersionEnum = "2010-05-08"
)


type PostListInstanceProfilesForRoleQueryParams struct {
    Action PostListInstanceProfilesForRoleActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxItems *string `queryParam:"style=form,explode=true,name=MaxItems"`
    Version PostListInstanceProfilesForRoleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostListInstanceProfilesForRoleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostListInstanceProfilesForRoleRequest struct {
    QueryParams PostListInstanceProfilesForRoleQueryParams 
    Headers PostListInstanceProfilesForRoleHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostListInstanceProfilesForRoleResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

