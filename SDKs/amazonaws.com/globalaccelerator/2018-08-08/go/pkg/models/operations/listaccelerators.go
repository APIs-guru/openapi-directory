package operations

import (
"openapi/pkg/models/shared")

type ListAcceleratorsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListAcceleratorsXAmzTargetEnum string

const (
    ListAcceleratorsXAmzTargetEnumGlobalAcceleratorV20180706ListAccelerators ListAcceleratorsXAmzTargetEnum = "GlobalAccelerator_V20180706.ListAccelerators"
)


type ListAcceleratorsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListAcceleratorsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListAcceleratorsRequest struct {
    QueryParams ListAcceleratorsQueryParams 
    Headers ListAcceleratorsHeaders 
    Request shared.ListAcceleratorsRequest `request:"mediaType=application/json"`
    
}

type ListAcceleratorsResponse struct {
    ContentType string 
    InternalServiceErrorException *interface{} 
    InvalidArgumentException *interface{} 
    InvalidNextTokenException *interface{} 
    ListAcceleratorsResponse *shared.ListAcceleratorsResponse 
    StatusCode int64 
    
}

