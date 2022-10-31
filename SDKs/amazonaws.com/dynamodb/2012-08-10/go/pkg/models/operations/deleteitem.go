package operations

import (
"openapi/pkg/models/shared")


type DeleteItemXAmzTargetEnum string

const (
    DeleteItemXAmzTargetEnumDynamoDb20120810DeleteItem DeleteItemXAmzTargetEnum = "DynamoDB_20120810.DeleteItem"
)


type DeleteItemHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteItemXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteItemRequest struct {
    Headers DeleteItemHeaders 
    Request shared.DeleteItemInput `request:"mediaType=application/json"`
    
}

type DeleteItemResponse struct {
    ConditionalCheckFailedException *interface{} 
    ContentType string 
    DeleteItemOutput *shared.DeleteItemOutput 
    InternalServerError *interface{} 
    ItemCollectionSizeLimitExceededException *interface{} 
    ProvisionedThroughputExceededException *interface{} 
    RequestLimitExceeded *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TransactionConflictException *interface{} 
    
}

