package operations

import (
	"openapi/pkg/models/shared"
)

type PutDefaultEncryptionConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PutDefaultEncryptionConfigurationRequestBodyEncryptionTypeEnum string

const (
	PutDefaultEncryptionConfigurationRequestBodyEncryptionTypeEnumSitewiseDefaultEncryption PutDefaultEncryptionConfigurationRequestBodyEncryptionTypeEnum = "SITEWISE_DEFAULT_ENCRYPTION"
	PutDefaultEncryptionConfigurationRequestBodyEncryptionTypeEnumKmsBasedEncryption        PutDefaultEncryptionConfigurationRequestBodyEncryptionTypeEnum = "KMS_BASED_ENCRYPTION"
)

type PutDefaultEncryptionConfigurationRequestBody struct {
	EncryptionType PutDefaultEncryptionConfigurationRequestBodyEncryptionTypeEnum `json:"encryptionType"`
	KmsKeyID       *string                                                        `json:"kmsKeyId,omitempty"`
}

type PutDefaultEncryptionConfigurationRequest struct {
	Headers PutDefaultEncryptionConfigurationHeaders
	Request PutDefaultEncryptionConfigurationRequestBody `request:"mediaType=application/json"`
}

type PutDefaultEncryptionConfigurationResponse struct {
	ConflictingOperationException             *interface{}
	ContentType                               string
	InternalFailureException                  *interface{}
	InvalidRequestException                   *interface{}
	LimitExceededException                    *interface{}
	PutDefaultEncryptionConfigurationResponse *shared.PutDefaultEncryptionConfigurationResponse
	StatusCode                                int64
	ThrottlingException                       *interface{}
}
