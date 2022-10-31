package operations

import (
"openapi/pkg/models/shared")


type PutRecordBatchXAmzTargetEnum string

const (
    PutRecordBatchXAmzTargetEnumFirehose20150804PutRecordBatch PutRecordBatchXAmzTargetEnum = "Firehose_20150804.PutRecordBatch"
)


type PutRecordBatchHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget PutRecordBatchXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type PutRecordBatchRequest struct {
    Headers PutRecordBatchHeaders 
    Request shared.PutRecordBatchInput `request:"mediaType=application/json"`
    
}

type PutRecordBatchResponse struct {
    ContentType string 
    InvalidArgumentException *interface{} 
    InvalidKmsResourceException *interface{} 
    PutRecordBatchOutput *shared.PutRecordBatchOutput 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    
}

