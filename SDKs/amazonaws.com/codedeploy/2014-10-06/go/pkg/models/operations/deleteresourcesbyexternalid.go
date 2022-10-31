package operations

import (
"openapi/pkg/models/shared")


type DeleteResourcesByExternalIDXAmzTargetEnum string

const (
    DeleteResourcesByExternalIDXAmzTargetEnumCodeDeploy20141006DeleteResourcesByExternalID DeleteResourcesByExternalIDXAmzTargetEnum = "CodeDeploy_20141006.DeleteResourcesByExternalId"
)


type DeleteResourcesByExternalIDHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteResourcesByExternalIDXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteResourcesByExternalIDRequest struct {
    Headers DeleteResourcesByExternalIDHeaders 
    Request shared.DeleteResourcesByExternalIDInput `request:"mediaType=application/json"`
    
}

type DeleteResourcesByExternalIDResponse struct {
    ContentType string 
    DeleteResourcesByExternalIDOutput map[string]interface{} 
    StatusCode int64 
    
}

