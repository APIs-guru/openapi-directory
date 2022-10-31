package operations

import (
"openapi/pkg/models/shared")


type GetCrawlerXAmzTargetEnum string

const (
    GetCrawlerXAmzTargetEnumAwsGlueGetCrawler GetCrawlerXAmzTargetEnum = "AWSGlue.GetCrawler"
)


type GetCrawlerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetCrawlerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetCrawlerRequest struct {
    Headers GetCrawlerHeaders 
    Request shared.GetCrawlerRequest `request:"mediaType=application/json"`
    
}

type GetCrawlerResponse struct {
    ContentType string 
    EntityNotFoundException *interface{} 
    GetCrawlerResponse *shared.GetCrawlerResponse 
    OperationTimeoutException *interface{} 
    StatusCode int64 
    
}

