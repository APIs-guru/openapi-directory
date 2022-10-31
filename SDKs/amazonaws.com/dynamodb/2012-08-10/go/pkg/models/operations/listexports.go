package operations

import (
"openapi/pkg/models/shared")

type ListExportsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListExportsXAmzTargetEnum string

const (
    ListExportsXAmzTargetEnumDynamoDb20120810ListExports ListExportsXAmzTargetEnum = "DynamoDB_20120810.ListExports"
)


type ListExportsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListExportsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListExportsRequest struct {
    QueryParams ListExportsQueryParams 
    Headers ListExportsHeaders 
    Request shared.ListExportsInput `request:"mediaType=application/json"`
    
}

type ListExportsResponse struct {
    ContentType string 
    InternalServerError *interface{} 
    LimitExceededException *interface{} 
    ListExportsOutput *shared.ListExportsOutput 
    StatusCode int64 
    
}

