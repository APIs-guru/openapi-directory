package operations

import (
"openapi/pkg/models/shared")


type AddTagsToResourceXAmzTargetEnum string

const (
    AddTagsToResourceXAmzTargetEnumCloudHsmFrontendServiceAddTagsToResource AddTagsToResourceXAmzTargetEnum = "CloudHsmFrontendService.AddTagsToResource"
)


type AddTagsToResourceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget AddTagsToResourceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type AddTagsToResourceRequest struct {
    Headers AddTagsToResourceHeaders 
    Request shared.AddTagsToResourceRequest `request:"mediaType=application/json"`
    
}

type AddTagsToResourceResponse struct {
    AddTagsToResourceResponse *shared.AddTagsToResourceResponse 
    CloudHsmInternalException *interface{} 
    CloudHsmServiceException *interface{} 
    ContentType string 
    InvalidRequestException *interface{} 
    StatusCode int64 
    
}

