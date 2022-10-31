package operations

import (
"openapi/pkg/models/shared")


type StartCrawlerXAmzTargetEnum string

const (
    StartCrawlerXAmzTargetEnumAwsGlueStartCrawler StartCrawlerXAmzTargetEnum = "AWSGlue.StartCrawler"
)


type StartCrawlerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StartCrawlerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StartCrawlerRequest struct {
    Headers StartCrawlerHeaders 
    Request shared.StartCrawlerRequest `request:"mediaType=application/json"`
    
}

type StartCrawlerResponse struct {
    ContentType string 
    CrawlerRunningException *interface{} 
    EntityNotFoundException *interface{} 
    OperationTimeoutException *interface{} 
    StartCrawlerResponse map[string]interface{} 
    StatusCode int64 
    
}

