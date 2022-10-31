package operations

import (
"openapi/pkg/models/shared")


type PutEventSelectorsXAmzTargetEnum string

const (
    PutEventSelectorsXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101PutEventSelectors PutEventSelectorsXAmzTargetEnum = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutEventSelectors"
)


type PutEventSelectorsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget PutEventSelectorsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type PutEventSelectorsRequest struct {
    Headers PutEventSelectorsHeaders 
    Request shared.PutEventSelectorsRequest `request:"mediaType=application/json"`
    
}

type PutEventSelectorsResponse struct {
    ContentType string 
    InsufficientDependencyServiceAccessPermissionException *interface{} 
    InvalidEventSelectorsException *interface{} 
    InvalidHomeRegionException *interface{} 
    InvalidTrailNameException *interface{} 
    NotOrganizationMasterAccountException *interface{} 
    OperationNotPermittedException *interface{} 
    PutEventSelectorsResponse *shared.PutEventSelectorsResponse 
    StatusCode int64 
    TrailNotFoundException *interface{} 
    UnsupportedOperationException *interface{} 
    
}

