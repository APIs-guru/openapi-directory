package operations

import (
"openapi/pkg/models/shared")


type UpdateCrawlerXAmzTargetEnum string

const (
    UpdateCrawlerXAmzTargetEnumAwsGlueUpdateCrawler UpdateCrawlerXAmzTargetEnum = "AWSGlue.UpdateCrawler"
)


type UpdateCrawlerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateCrawlerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateCrawlerRequest struct {
    Headers UpdateCrawlerHeaders 
    Request shared.UpdateCrawlerRequest `request:"mediaType=application/json"`
    
}

type UpdateCrawlerResponse struct {
    ContentType string 
    CrawlerRunningException *interface{} 
    EntityNotFoundException *interface{} 
    InvalidInputException *interface{} 
    OperationTimeoutException *interface{} 
    StatusCode int64 
    UpdateCrawlerResponse map[string]interface{} 
    VersionMismatchException *interface{} 
    
}

