package operations

import (
"openapi/pkg/models/shared")


type GetNamedQueryXAmzTargetEnum string

const (
    GetNamedQueryXAmzTargetEnumAmazonAthenaGetNamedQuery GetNamedQueryXAmzTargetEnum = "AmazonAthena.GetNamedQuery"
)


type GetNamedQueryHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetNamedQueryXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetNamedQueryRequest struct {
    Headers GetNamedQueryHeaders 
    Request shared.GetNamedQueryInput `request:"mediaType=application/json"`
    
}

type GetNamedQueryResponse struct {
    ContentType string 
    GetNamedQueryOutput *shared.GetNamedQueryOutput 
    InternalServerException *interface{} 
    InvalidRequestException *interface{} 
    StatusCode int64 
    
}

