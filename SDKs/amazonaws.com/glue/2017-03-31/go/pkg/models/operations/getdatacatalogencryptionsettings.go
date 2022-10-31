package operations

import (
"openapi/pkg/models/shared")


type GetDataCatalogEncryptionSettingsXAmzTargetEnum string

const (
    GetDataCatalogEncryptionSettingsXAmzTargetEnumAwsGlueGetDataCatalogEncryptionSettings GetDataCatalogEncryptionSettingsXAmzTargetEnum = "AWSGlue.GetDataCatalogEncryptionSettings"
)


type GetDataCatalogEncryptionSettingsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetDataCatalogEncryptionSettingsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetDataCatalogEncryptionSettingsRequest struct {
    Headers GetDataCatalogEncryptionSettingsHeaders 
    Request shared.GetDataCatalogEncryptionSettingsRequest `request:"mediaType=application/json"`
    
}

type GetDataCatalogEncryptionSettingsResponse struct {
    ContentType string 
    GetDataCatalogEncryptionSettingsResponse *shared.GetDataCatalogEncryptionSettingsResponse 
    InternalServiceException *interface{} 
    InvalidInputException *interface{} 
    OperationTimeoutException *interface{} 
    StatusCode int64 
    
}

