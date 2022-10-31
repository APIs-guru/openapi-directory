package operations

import (
"openapi/pkg/models/shared")

type PutDefaultEncryptionConfigurationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}


type PutDefaultEncryptionConfigurationRequestBodyEncryptionTypeEnum string

const (
    PutDefaultEncryptionConfigurationRequestBodyEncryptionTypeEnumSitewiseDefaultEncryption PutDefaultEncryptionConfigurationRequestBodyEncryptionTypeEnum = "SITEWISE_DEFAULT_ENCRYPTION"
PutDefaultEncryptionConfigurationRequestBodyEncryptionTypeEnumKmsBasedEncryption PutDefaultEncryptionConfigurationRequestBodyEncryptionTypeEnum = "KMS_BASED_ENCRYPTION"
)


type PutDefaultEncryptionConfigurationRequestBody struct {
    EncryptionType PutDefaultEncryptionConfigurationRequestBodyEncryptionTypeEnum `json:"encryptionType"`
    KmsKeyID *string `json:"kmsKeyId,omitempty"`
    
}

type PutDefaultEncryptionConfigurationRequest struct {
    Headers PutDefaultEncryptionConfigurationHeaders 
    Request PutDefaultEncryptionConfigurationRequestBody `request:"mediaType=application/json"`
    
}

type PutDefaultEncryptionConfigurationResponse struct {
    ConflictingOperationException *interface{} 
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    LimitExceededException *interface{} 
    PutDefaultEncryptionConfigurationResponse *shared.PutDefaultEncryptionConfigurationResponse 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

