package operations




type PostListInstanceProfilesActionEnum string

const (
    PostListInstanceProfilesActionEnumListInstanceProfiles PostListInstanceProfilesActionEnum = "ListInstanceProfiles"
)



type PostListInstanceProfilesVersionEnum string

const (
    PostListInstanceProfilesVersionEnumTwoThousandAndTen0508 PostListInstanceProfilesVersionEnum = "2010-05-08"
)


type PostListInstanceProfilesQueryParams struct {
    Action PostListInstanceProfilesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxItems *string `queryParam:"style=form,explode=true,name=MaxItems"`
    Version PostListInstanceProfilesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostListInstanceProfilesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostListInstanceProfilesRequest struct {
    QueryParams PostListInstanceProfilesQueryParams 
    Headers PostListInstanceProfilesHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostListInstanceProfilesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

