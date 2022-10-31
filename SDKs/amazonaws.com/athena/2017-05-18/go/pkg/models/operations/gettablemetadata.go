package operations

import (
"openapi/pkg/models/shared")


type GetTableMetadataXAmzTargetEnum string

const (
    GetTableMetadataXAmzTargetEnumAmazonAthenaGetTableMetadata GetTableMetadataXAmzTargetEnum = "AmazonAthena.GetTableMetadata"
)


type GetTableMetadataHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetTableMetadataXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetTableMetadataRequest struct {
    Headers GetTableMetadataHeaders 
    Request shared.GetTableMetadataInput `request:"mediaType=application/json"`
    
}

type GetTableMetadataResponse struct {
    ContentType string 
    GetTableMetadataOutput *shared.GetTableMetadataOutput 
    InternalServerException *interface{} 
    InvalidRequestException *interface{} 
    MetadataException *interface{} 
    StatusCode int64 
    
}

