package operations




type PostRemoveTagsActionEnum string

const (
    PostRemoveTagsActionEnumRemoveTags PostRemoveTagsActionEnum = "RemoveTags"
)



type PostRemoveTagsVersionEnum string

const (
    PostRemoveTagsVersionEnumTwoThousandAndFifteen1201 PostRemoveTagsVersionEnum = "2015-12-01"
)


type PostRemoveTagsQueryParams struct {
    Action PostRemoveTagsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostRemoveTagsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostRemoveTagsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostRemoveTagsRequest struct {
    QueryParams PostRemoveTagsQueryParams 
    Headers PostRemoveTagsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostRemoveTagsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

