package operations




type PostListRoleTagsActionEnum string

const (
    PostListRoleTagsActionEnumListRoleTags PostListRoleTagsActionEnum = "ListRoleTags"
)



type PostListRoleTagsVersionEnum string

const (
    PostListRoleTagsVersionEnumTwoThousandAndTen0508 PostListRoleTagsVersionEnum = "2010-05-08"
)


type PostListRoleTagsQueryParams struct {
    Action PostListRoleTagsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostListRoleTagsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostListRoleTagsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostListRoleTagsRequest struct {
    QueryParams PostListRoleTagsQueryParams 
    Headers PostListRoleTagsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostListRoleTagsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

