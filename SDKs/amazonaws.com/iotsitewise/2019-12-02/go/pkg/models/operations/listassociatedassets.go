package operations

import (
"openapi/pkg/models/shared")

type ListAssociatedAssetsPathParams struct {
    AssetID string `pathParam:"style=simple,explode=false,name=assetId"`
    
}


type ListAssociatedAssetsTraversalDirectionEnum string

const (
    ListAssociatedAssetsTraversalDirectionEnumParent ListAssociatedAssetsTraversalDirectionEnum = "PARENT"
ListAssociatedAssetsTraversalDirectionEnumChild ListAssociatedAssetsTraversalDirectionEnum = "CHILD"
)


type ListAssociatedAssetsQueryParams struct {
    HierarchyID *string `queryParam:"style=form,explode=true,name=hierarchyId"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    TraversalDirection *ListAssociatedAssetsTraversalDirectionEnum `queryParam:"style=form,explode=true,name=traversalDirection"`
    
}

type ListAssociatedAssetsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListAssociatedAssetsRequest struct {
    PathParams ListAssociatedAssetsPathParams 
    QueryParams ListAssociatedAssetsQueryParams 
    Headers ListAssociatedAssetsHeaders 
    
}

type ListAssociatedAssetsResponse struct {
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ListAssociatedAssetsResponse *shared.ListAssociatedAssetsResponse 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

