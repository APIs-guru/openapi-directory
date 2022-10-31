package operations

import (
"openapi/pkg/models/shared")

type GetLifecyclePolicyPreviewQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}


type GetLifecyclePolicyPreviewXAmzTargetEnum string

const (
    GetLifecyclePolicyPreviewXAmzTargetEnumAmazonEc2ContainerRegistryV20150921GetLifecyclePolicyPreview GetLifecyclePolicyPreviewXAmzTargetEnum = "AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicyPreview"
)


type GetLifecyclePolicyPreviewHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetLifecyclePolicyPreviewXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetLifecyclePolicyPreviewRequest struct {
    QueryParams GetLifecyclePolicyPreviewQueryParams 
    Headers GetLifecyclePolicyPreviewHeaders 
    Request shared.GetLifecyclePolicyPreviewRequest `request:"mediaType=application/json"`
    
}

type GetLifecyclePolicyPreviewResponse struct {
    ContentType string 
    GetLifecyclePolicyPreviewResponse *shared.GetLifecyclePolicyPreviewResponse 
    InvalidParameterException *interface{} 
    LifecyclePolicyPreviewNotFoundException *interface{} 
    RepositoryNotFoundException *interface{} 
    ServerException *interface{} 
    StatusCode int64 
    
}

