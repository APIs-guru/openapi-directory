package operations

import (
"openapi/pkg/models/shared")

type DescribeDimensionPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type DescribeDimensionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DescribeDimensionRequest struct {
    PathParams DescribeDimensionPathParams 
    Headers DescribeDimensionHeaders 
    
}

type DescribeDimensionResponse struct {
    ContentType string 
    DescribeDimensionResponse *shared.DescribeDimensionResponse 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

