package operations




type PostListUserPoliciesActionEnum string

const (
    PostListUserPoliciesActionEnumListUserPolicies PostListUserPoliciesActionEnum = "ListUserPolicies"
)



type PostListUserPoliciesVersionEnum string

const (
    PostListUserPoliciesVersionEnumTwoThousandAndTen0508 PostListUserPoliciesVersionEnum = "2010-05-08"
)


type PostListUserPoliciesQueryParams struct {
    Action PostListUserPoliciesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxItems *string `queryParam:"style=form,explode=true,name=MaxItems"`
    Version PostListUserPoliciesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostListUserPoliciesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostListUserPoliciesRequest struct {
    QueryParams PostListUserPoliciesQueryParams 
    Headers PostListUserPoliciesHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostListUserPoliciesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

