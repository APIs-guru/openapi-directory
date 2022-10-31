package operations

import (
"openapi/pkg/models/shared")


type ListEngineVersionsXAmzTargetEnum string

const (
    ListEngineVersionsXAmzTargetEnumAmazonAthenaListEngineVersions ListEngineVersionsXAmzTargetEnum = "AmazonAthena.ListEngineVersions"
)


type ListEngineVersionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListEngineVersionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListEngineVersionsRequest struct {
    Headers ListEngineVersionsHeaders 
    Request shared.ListEngineVersionsInput `request:"mediaType=application/json"`
    
}

type ListEngineVersionsResponse struct {
    ContentType string 
    InternalServerException *interface{} 
    InvalidRequestException *interface{} 
    ListEngineVersionsOutput *shared.ListEngineVersionsOutput 
    StatusCode int64 
    
}

