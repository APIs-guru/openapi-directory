package operations

import (
	"openapi/pkg/models/shared"
)

type GetDataCatalogEncryptionSettingsXAmzTargetEnum string

const (
	GetDataCatalogEncryptionSettingsXAmzTargetEnumAwsGlueGetDataCatalogEncryptionSettings GetDataCatalogEncryptionSettingsXAmzTargetEnum = "AWSGlue.GetDataCatalogEncryptionSettings"
)

type GetDataCatalogEncryptionSettingsHeaders struct {
	XAmzAlgorithm     *string                                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetDataCatalogEncryptionSettingsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetDataCatalogEncryptionSettingsRequest struct {
	Headers GetDataCatalogEncryptionSettingsHeaders
	Request shared.GetDataCatalogEncryptionSettingsRequest `request:"mediaType=application/json"`
}

type GetDataCatalogEncryptionSettingsResponse struct {
	ContentType                              string
	GetDataCatalogEncryptionSettingsResponse *shared.GetDataCatalogEncryptionSettingsResponse
	InternalServiceException                 *interface{}
	InvalidInputException                    *interface{}
	OperationTimeoutException                *interface{}
	StatusCode                               int64
}
