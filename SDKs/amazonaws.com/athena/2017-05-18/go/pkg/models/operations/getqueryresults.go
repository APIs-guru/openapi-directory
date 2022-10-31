package operations

import (
"openapi/pkg/models/shared")

type GetQueryResultsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type GetQueryResultsXAmzTargetEnum string

const (
    GetQueryResultsXAmzTargetEnumAmazonAthenaGetQueryResults GetQueryResultsXAmzTargetEnum = "AmazonAthena.GetQueryResults"
)


type GetQueryResultsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetQueryResultsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetQueryResultsRequest struct {
    QueryParams GetQueryResultsQueryParams 
    Headers GetQueryResultsHeaders 
    Request shared.GetQueryResultsInput `request:"mediaType=application/json"`
    
}

type GetQueryResultsResponse struct {
    ContentType string 
    GetQueryResultsOutput *shared.GetQueryResultsOutput 
    InternalServerException *interface{} 
    InvalidRequestException *interface{} 
    StatusCode int64 
    
}

