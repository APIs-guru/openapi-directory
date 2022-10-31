package operations

import (
"openapi/pkg/models/shared")

type ListBulkDeploymentsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}

type ListBulkDeploymentsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListBulkDeploymentsRequest struct {
    QueryParams ListBulkDeploymentsQueryParams 
    Headers ListBulkDeploymentsHeaders 
    
}

type ListBulkDeploymentsResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    ListBulkDeploymentsResponse *shared.ListBulkDeploymentsResponse 
    StatusCode int64 
    
}

