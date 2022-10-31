package operations

import (
"openapi/pkg/models/shared")


type StopCrawlerXAmzTargetEnum string

const (
    StopCrawlerXAmzTargetEnumAwsGlueStopCrawler StopCrawlerXAmzTargetEnum = "AWSGlue.StopCrawler"
)


type StopCrawlerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StopCrawlerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StopCrawlerRequest struct {
    Headers StopCrawlerHeaders 
    Request shared.StopCrawlerRequest `request:"mediaType=application/json"`
    
}

type StopCrawlerResponse struct {
    ContentType string 
    CrawlerNotRunningException *interface{} 
    CrawlerStoppingException *interface{} 
    EntityNotFoundException *interface{} 
    OperationTimeoutException *interface{} 
    StatusCode int64 
    StopCrawlerResponse map[string]interface{} 
    
}

