package operations




type GetListPolicyTagsActionEnum string

const (
    GetListPolicyTagsActionEnumListPolicyTags GetListPolicyTagsActionEnum = "ListPolicyTags"
)



type GetListPolicyTagsVersionEnum string

const (
    GetListPolicyTagsVersionEnumTwoThousandAndTen0508 GetListPolicyTagsVersionEnum = "2010-05-08"
)


type GetListPolicyTagsQueryParams struct {
    Action GetListPolicyTagsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxItems *int64 `queryParam:"style=form,explode=true,name=MaxItems"`
    PolicyArn string `queryParam:"style=form,explode=true,name=PolicyArn"`
    Version GetListPolicyTagsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetListPolicyTagsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetListPolicyTagsRequest struct {
    QueryParams GetListPolicyTagsQueryParams 
    Headers GetListPolicyTagsHeaders 
    
}

type GetListPolicyTagsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

