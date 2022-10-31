package operations

import (
"openapi/pkg/models/shared")

type ListConnectionsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListConnectionsXAmzTargetEnum string

const (
    ListConnectionsXAmzTargetEnumAppRunnerListConnections ListConnectionsXAmzTargetEnum = "AppRunner.ListConnections"
)


type ListConnectionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListConnectionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListConnectionsRequest struct {
    QueryParams ListConnectionsQueryParams 
    Headers ListConnectionsHeaders 
    Request shared.ListConnectionsRequest `request:"mediaType=application/json"`
    
}

type ListConnectionsResponse struct {
    ContentType string 
    InternalServiceErrorException *interface{} 
    InvalidRequestException *interface{} 
    ListConnectionsResponse *shared.ListConnectionsResponse 
    StatusCode int64 
    
}

