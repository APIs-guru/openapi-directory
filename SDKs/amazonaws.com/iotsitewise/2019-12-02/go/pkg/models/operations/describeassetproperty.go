package operations

import (
"openapi/pkg/models/shared")

type DescribeAssetPropertyPathParams struct {
    AssetID string `pathParam:"style=simple,explode=false,name=assetId"`
    PropertyID string `pathParam:"style=simple,explode=false,name=propertyId"`
    
}

type DescribeAssetPropertyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DescribeAssetPropertyRequest struct {
    PathParams DescribeAssetPropertyPathParams 
    Headers DescribeAssetPropertyHeaders 
    
}

type DescribeAssetPropertyResponse struct {
    ContentType string 
    DescribeAssetPropertyResponse *shared.DescribeAssetPropertyResponse 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

