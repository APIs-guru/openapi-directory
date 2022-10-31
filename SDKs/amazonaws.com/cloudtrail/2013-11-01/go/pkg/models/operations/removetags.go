package operations

import (
"openapi/pkg/models/shared")


type RemoveTagsXAmzTargetEnum string

const (
    RemoveTagsXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101RemoveTags RemoveTagsXAmzTargetEnum = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RemoveTags"
)


type RemoveTagsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget RemoveTagsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type RemoveTagsRequest struct {
    Headers RemoveTagsHeaders 
    Request shared.RemoveTagsRequest `request:"mediaType=application/json"`
    
}

type RemoveTagsResponse struct {
    CloudTrailArnInvalidException *interface{} 
    ContentType string 
    InvalidTagParameterException *interface{} 
    InvalidTrailNameException *interface{} 
    NotOrganizationMasterAccountException *interface{} 
    OperationNotPermittedException *interface{} 
    RemoveTagsResponse map[string]interface{} 
    ResourceNotFoundException *interface{} 
    ResourceTypeNotSupportedException *interface{} 
    StatusCode int64 
    UnsupportedOperationException *interface{} 
    
}

