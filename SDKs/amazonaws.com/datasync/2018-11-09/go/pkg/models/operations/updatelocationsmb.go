package operations

import (
"openapi/pkg/models/shared")


type UpdateLocationSmbXAmzTargetEnum string

const (
    UpdateLocationSmbXAmzTargetEnumFmrsServiceUpdateLocationSmb UpdateLocationSmbXAmzTargetEnum = "FmrsService.UpdateLocationSmb"
)


type UpdateLocationSmbHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateLocationSmbXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateLocationSmbRequest struct {
    Headers UpdateLocationSmbHeaders 
    Request shared.UpdateLocationSmbRequest `request:"mediaType=application/json"`
    
}

type UpdateLocationSmbResponse struct {
    ContentType string 
    InternalException *interface{} 
    InvalidRequestException *interface{} 
    StatusCode int64 
    UpdateLocationSmbResponse map[string]interface{} 
    
}

