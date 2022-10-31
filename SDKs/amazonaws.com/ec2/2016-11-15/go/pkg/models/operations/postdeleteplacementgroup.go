package operations




type PostDeletePlacementGroupActionEnum string

const (
    PostDeletePlacementGroupActionEnumDeletePlacementGroup PostDeletePlacementGroupActionEnum = "DeletePlacementGroup"
)



type PostDeletePlacementGroupVersionEnum string

const (
    PostDeletePlacementGroupVersionEnumTwoThousandAndSixteen1115 PostDeletePlacementGroupVersionEnum = "2016-11-15"
)


type PostDeletePlacementGroupQueryParams struct {
    Action PostDeletePlacementGroupActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeletePlacementGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeletePlacementGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeletePlacementGroupRequest struct {
    QueryParams PostDeletePlacementGroupQueryParams 
    Headers PostDeletePlacementGroupHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeletePlacementGroupResponse struct {
    ContentType string 
    StatusCode int64 
    
}

