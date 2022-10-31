package operations




type GetListUserTagsActionEnum string

const (
    GetListUserTagsActionEnumListUserTags GetListUserTagsActionEnum = "ListUserTags"
)



type GetListUserTagsVersionEnum string

const (
    GetListUserTagsVersionEnumTwoThousandAndTen0508 GetListUserTagsVersionEnum = "2010-05-08"
)


type GetListUserTagsQueryParams struct {
    Action GetListUserTagsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxItems *int64 `queryParam:"style=form,explode=true,name=MaxItems"`
    UserName string `queryParam:"style=form,explode=true,name=UserName"`
    Version GetListUserTagsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetListUserTagsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetListUserTagsRequest struct {
    QueryParams GetListUserTagsQueryParams 
    Headers GetListUserTagsHeaders 
    
}

type GetListUserTagsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

