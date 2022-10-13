package operations

import (
	"openapi/pkg/models/shared"
)

type PutDataCatalogEncryptionSettingsXAmzTargetEnum string

const (
	PutDataCatalogEncryptionSettingsXAmzTargetEnumAwsGluePutDataCatalogEncryptionSettings PutDataCatalogEncryptionSettingsXAmzTargetEnum = "AWSGlue.PutDataCatalogEncryptionSettings"
)

type PutDataCatalogEncryptionSettingsHeaders struct {
	XAmzAlgorithm     *string                                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutDataCatalogEncryptionSettingsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutDataCatalogEncryptionSettingsRequest struct {
	Headers PutDataCatalogEncryptionSettingsHeaders
	Request shared.PutDataCatalogEncryptionSettingsRequest `request:"mediaType=application/json"`
}

type PutDataCatalogEncryptionSettingsResponse struct {
	ContentType                              string
	InternalServiceException                 *interface{}
	InvalidInputException                    *interface{}
	OperationTimeoutException                *interface{}
	PutDataCatalogEncryptionSettingsResponse map[string]interface{}
	StatusCode                               int64
}
