package operations

import (
"openapi/pkg/models/shared")


type DeleteCrawlerXAmzTargetEnum string

const (
    DeleteCrawlerXAmzTargetEnumAwsGlueDeleteCrawler DeleteCrawlerXAmzTargetEnum = "AWSGlue.DeleteCrawler"
)


type DeleteCrawlerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteCrawlerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteCrawlerRequest struct {
    Headers DeleteCrawlerHeaders 
    Request shared.DeleteCrawlerRequest `request:"mediaType=application/json"`
    
}

type DeleteCrawlerResponse struct {
    ContentType string 
    CrawlerRunningException *interface{} 
    DeleteCrawlerResponse map[string]interface{} 
    EntityNotFoundException *interface{} 
    OperationTimeoutException *interface{} 
    SchedulerTransitioningException *interface{} 
    StatusCode int64 
    
}

