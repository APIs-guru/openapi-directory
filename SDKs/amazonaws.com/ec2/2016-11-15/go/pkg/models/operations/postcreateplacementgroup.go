package operations




type PostCreatePlacementGroupActionEnum string

const (
    PostCreatePlacementGroupActionEnumCreatePlacementGroup PostCreatePlacementGroupActionEnum = "CreatePlacementGroup"
)



type PostCreatePlacementGroupVersionEnum string

const (
    PostCreatePlacementGroupVersionEnumTwoThousandAndSixteen1115 PostCreatePlacementGroupVersionEnum = "2016-11-15"
)


type PostCreatePlacementGroupQueryParams struct {
    Action PostCreatePlacementGroupActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCreatePlacementGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCreatePlacementGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCreatePlacementGroupRequest struct {
    QueryParams PostCreatePlacementGroupQueryParams 
    Headers PostCreatePlacementGroupHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCreatePlacementGroupResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

