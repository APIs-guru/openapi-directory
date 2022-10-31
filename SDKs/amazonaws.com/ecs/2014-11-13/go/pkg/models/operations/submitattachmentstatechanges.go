package operations

import (
"openapi/pkg/models/shared")


type SubmitAttachmentStateChangesXAmzTargetEnum string

const (
    SubmitAttachmentStateChangesXAmzTargetEnumAmazonEc2ContainerServiceV20141113SubmitAttachmentStateChanges SubmitAttachmentStateChangesXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.SubmitAttachmentStateChanges"
)


type SubmitAttachmentStateChangesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget SubmitAttachmentStateChangesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type SubmitAttachmentStateChangesRequest struct {
    Headers SubmitAttachmentStateChangesHeaders 
    Request shared.SubmitAttachmentStateChangesRequest `request:"mediaType=application/json"`
    
}

type SubmitAttachmentStateChangesResponse struct {
    AccessDeniedException *interface{} 
    ClientException *interface{} 
    ContentType string 
    InvalidParameterException *interface{} 
    ServerException *interface{} 
    StatusCode int64 
    SubmitAttachmentStateChangesResponse *shared.SubmitAttachmentStateChangesResponse 
    
}

