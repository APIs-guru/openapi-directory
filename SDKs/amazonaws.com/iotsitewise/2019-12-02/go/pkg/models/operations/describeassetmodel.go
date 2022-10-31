package operations

import (
"openapi/pkg/models/shared")

type DescribeAssetModelPathParams struct {
    AssetModelID string `pathParam:"style=simple,explode=false,name=assetModelId"`
    
}

type DescribeAssetModelHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DescribeAssetModelRequest struct {
    PathParams DescribeAssetModelPathParams 
    Headers DescribeAssetModelHeaders 
    
}

type DescribeAssetModelResponse struct {
    ContentType string 
    DescribeAssetModelResponse *shared.DescribeAssetModelResponse 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

