package operations

import (
"openapi/pkg/models/shared")


type GetAppsListXAmzTargetEnum string

const (
    GetAppsListXAmzTargetEnumAwsfms20180101GetAppsList GetAppsListXAmzTargetEnum = "AWSFMS_20180101.GetAppsList"
)


type GetAppsListHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetAppsListXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetAppsListRequest struct {
    Headers GetAppsListHeaders 
    Request shared.GetAppsListRequest `request:"mediaType=application/json"`
    
}

type GetAppsListResponse struct {
    ContentType string 
    GetAppsListResponse *shared.GetAppsListResponse 
    InternalErrorException *interface{} 
    InvalidOperationException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

