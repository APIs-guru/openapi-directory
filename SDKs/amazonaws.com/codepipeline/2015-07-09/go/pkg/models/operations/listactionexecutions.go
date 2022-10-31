package operations

import (
"openapi/pkg/models/shared")

type ListActionExecutionsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}


type ListActionExecutionsXAmzTargetEnum string

const (
    ListActionExecutionsXAmzTargetEnumCodePipeline20150709ListActionExecutions ListActionExecutionsXAmzTargetEnum = "CodePipeline_20150709.ListActionExecutions"
)


type ListActionExecutionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListActionExecutionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListActionExecutionsRequest struct {
    QueryParams ListActionExecutionsQueryParams 
    Headers ListActionExecutionsHeaders 
    Request shared.ListActionExecutionsInput `request:"mediaType=application/json"`
    
}

type ListActionExecutionsResponse struct {
    ContentType string 
    InvalidNextTokenException *interface{} 
    ListActionExecutionsOutput *shared.ListActionExecutionsOutput 
    PipelineExecutionNotFoundException *interface{} 
    PipelineNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

