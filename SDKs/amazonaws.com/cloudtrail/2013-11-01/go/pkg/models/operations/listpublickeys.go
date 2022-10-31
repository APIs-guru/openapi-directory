package operations

import (
"openapi/pkg/models/shared")

type ListPublicKeysQueryParams struct {
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListPublicKeysXAmzTargetEnum string

const (
    ListPublicKeysXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101ListPublicKeys ListPublicKeysXAmzTargetEnum = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListPublicKeys"
)


type ListPublicKeysHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListPublicKeysXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListPublicKeysRequest struct {
    QueryParams ListPublicKeysQueryParams 
    Headers ListPublicKeysHeaders 
    Request shared.ListPublicKeysRequest `request:"mediaType=application/json"`
    
}

type ListPublicKeysResponse struct {
    ContentType string 
    InvalidTimeRangeException *interface{} 
    InvalidTokenException *interface{} 
    ListPublicKeysResponse *shared.ListPublicKeysResponse 
    OperationNotPermittedException *interface{} 
    StatusCode int64 
    UnsupportedOperationException *interface{} 
    
}

