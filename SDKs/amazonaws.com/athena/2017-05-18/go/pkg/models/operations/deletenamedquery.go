package operations

import (
"openapi/pkg/models/shared")


type DeleteNamedQueryXAmzTargetEnum string

const (
    DeleteNamedQueryXAmzTargetEnumAmazonAthenaDeleteNamedQuery DeleteNamedQueryXAmzTargetEnum = "AmazonAthena.DeleteNamedQuery"
)


type DeleteNamedQueryHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteNamedQueryXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteNamedQueryRequest struct {
    Headers DeleteNamedQueryHeaders 
    Request shared.DeleteNamedQueryInput `request:"mediaType=application/json"`
    
}

type DeleteNamedQueryResponse struct {
    ContentType string 
    DeleteNamedQueryOutput map[string]interface{} 
    InternalServerException *interface{} 
    InvalidRequestException *interface{} 
    StatusCode int64 
    
}

