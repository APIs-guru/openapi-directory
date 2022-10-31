package operations

import (
"openapi/pkg/models/shared")


type GetItemXAmzTargetEnum string

const (
    GetItemXAmzTargetEnumDynamoDb20120810GetItem GetItemXAmzTargetEnum = "DynamoDB_20120810.GetItem"
)


type GetItemHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetItemXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetItemRequest struct {
    Headers GetItemHeaders 
    Request shared.GetItemInput `request:"mediaType=application/json"`
    
}

type GetItemResponse struct {
    ContentType string 
    GetItemOutput *shared.GetItemOutput 
    InternalServerError *interface{} 
    ProvisionedThroughputExceededException *interface{} 
    RequestLimitExceeded *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

