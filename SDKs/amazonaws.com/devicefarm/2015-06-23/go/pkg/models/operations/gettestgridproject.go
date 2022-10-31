package operations

import (
"openapi/pkg/models/shared")


type GetTestGridProjectXAmzTargetEnum string

const (
    GetTestGridProjectXAmzTargetEnumDeviceFarm20150623GetTestGridProject GetTestGridProjectXAmzTargetEnum = "DeviceFarm_20150623.GetTestGridProject"
)


type GetTestGridProjectHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetTestGridProjectXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetTestGridProjectRequest struct {
    Headers GetTestGridProjectHeaders 
    Request shared.GetTestGridProjectRequest `request:"mediaType=application/json"`
    
}

type GetTestGridProjectResponse struct {
    ArgumentException *interface{} 
    ContentType string 
    GetTestGridProjectResult *shared.GetTestGridProjectResult 
    InternalServiceException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    
}

