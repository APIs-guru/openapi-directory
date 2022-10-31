package operations

import (
"openapi/pkg/models/shared")


type ListGlobalTablesXAmzTargetEnum string

const (
    ListGlobalTablesXAmzTargetEnumDynamoDb20120810ListGlobalTables ListGlobalTablesXAmzTargetEnum = "DynamoDB_20120810.ListGlobalTables"
)


type ListGlobalTablesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListGlobalTablesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListGlobalTablesRequest struct {
    Headers ListGlobalTablesHeaders 
    Request shared.ListGlobalTablesInput `request:"mediaType=application/json"`
    
}

type ListGlobalTablesResponse struct {
    ContentType string 
    InternalServerError *interface{} 
    ListGlobalTablesOutput *shared.ListGlobalTablesOutput 
    StatusCode int64 
    
}

