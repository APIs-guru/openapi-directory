package operations

import (
"openapi/pkg/models/shared")

type ScanQueryParams struct {
    ExclusiveStartKey *string `queryParam:"style=form,explode=true,name=ExclusiveStartKey"`
    Limit *string `queryParam:"style=form,explode=true,name=Limit"`
    
}


type ScanXAmzTargetEnum string

const (
    ScanXAmzTargetEnumDynamoDb20111205Scan ScanXAmzTargetEnum = "DynamoDB_20111205.Scan"
)


type ScanHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ScanXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ScanRequest struct {
    QueryParams ScanQueryParams 
    Headers ScanHeaders 
    Request shared.ScanInput `request:"mediaType=application/json"`
    
}

type ScanResponse struct {
    ContentType string 
    InternalServerError *interface{} 
    ProvisionedThroughputExceededException *interface{} 
    RequestLimitExceeded *interface{} 
    ResourceNotFoundException *interface{} 
    ScanOutput *shared.ScanOutput 
    StatusCode int64 
    
}

