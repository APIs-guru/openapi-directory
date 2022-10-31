package operations

import (
"openapi/pkg/models/shared")

type DescribeDatasetPathParams struct {
    DatasetName string `pathParam:"style=simple,explode=false,name=DatasetName"`
    IdentityID string `pathParam:"style=simple,explode=false,name=IdentityId"`
    IdentityPoolID string `pathParam:"style=simple,explode=false,name=IdentityPoolId"`
    
}

type DescribeDatasetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DescribeDatasetRequest struct {
    PathParams DescribeDatasetPathParams 
    Headers DescribeDatasetHeaders 
    
}

type DescribeDatasetResponse struct {
    ContentType string 
    DescribeDatasetResponse *shared.DescribeDatasetResponse 
    InternalErrorException *interface{} 
    InvalidParameterException *interface{} 
    NotAuthorizedException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

