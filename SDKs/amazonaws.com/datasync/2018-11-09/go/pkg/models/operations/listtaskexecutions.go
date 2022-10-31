package operations

import (
"openapi/pkg/models/shared")

type ListTaskExecutionsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListTaskExecutionsXAmzTargetEnum string

const (
    ListTaskExecutionsXAmzTargetEnumFmrsServiceListTaskExecutions ListTaskExecutionsXAmzTargetEnum = "FmrsService.ListTaskExecutions"
)


type ListTaskExecutionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListTaskExecutionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListTaskExecutionsRequest struct {
    QueryParams ListTaskExecutionsQueryParams 
    Headers ListTaskExecutionsHeaders 
    Request shared.ListTaskExecutionsRequest `request:"mediaType=application/json"`
    
}

type ListTaskExecutionsResponse struct {
    ContentType string 
    InternalException *interface{} 
    InvalidRequestException *interface{} 
    ListTaskExecutionsResponse *shared.ListTaskExecutionsResponse 
    StatusCode int64 
    
}

