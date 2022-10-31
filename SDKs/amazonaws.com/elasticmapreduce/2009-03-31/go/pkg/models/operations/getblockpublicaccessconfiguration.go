package operations

import (
"openapi/pkg/models/shared")


type GetBlockPublicAccessConfigurationXAmzTargetEnum string

const (
    GetBlockPublicAccessConfigurationXAmzTargetEnumElasticMapReduceGetBlockPublicAccessConfiguration GetBlockPublicAccessConfigurationXAmzTargetEnum = "ElasticMapReduce.GetBlockPublicAccessConfiguration"
)


type GetBlockPublicAccessConfigurationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetBlockPublicAccessConfigurationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetBlockPublicAccessConfigurationRequest struct {
    Headers GetBlockPublicAccessConfigurationHeaders 
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type GetBlockPublicAccessConfigurationResponse struct {
    ContentType string 
    GetBlockPublicAccessConfigurationOutput *shared.GetBlockPublicAccessConfigurationOutput 
    InternalServerException *interface{} 
    InvalidRequestException *interface{} 
    StatusCode int64 
    
}

