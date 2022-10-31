package operations




type GetListInstanceProfileTagsActionEnum string

const (
    GetListInstanceProfileTagsActionEnumListInstanceProfileTags GetListInstanceProfileTagsActionEnum = "ListInstanceProfileTags"
)



type GetListInstanceProfileTagsVersionEnum string

const (
    GetListInstanceProfileTagsVersionEnumTwoThousandAndTen0508 GetListInstanceProfileTagsVersionEnum = "2010-05-08"
)


type GetListInstanceProfileTagsQueryParams struct {
    Action GetListInstanceProfileTagsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    InstanceProfileName string `queryParam:"style=form,explode=true,name=InstanceProfileName"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxItems *int64 `queryParam:"style=form,explode=true,name=MaxItems"`
    Version GetListInstanceProfileTagsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetListInstanceProfileTagsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetListInstanceProfileTagsRequest struct {
    QueryParams GetListInstanceProfileTagsQueryParams 
    Headers GetListInstanceProfileTagsHeaders 
    
}

type GetListInstanceProfileTagsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

