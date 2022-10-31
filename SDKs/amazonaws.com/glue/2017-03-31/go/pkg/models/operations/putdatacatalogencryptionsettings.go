package operations

import (
	"openapi/pkg/models/shared"
)

type PutDataCatalogEncryptionSettingsXAmzTargetEnum string

const (
	PutDataCatalogEncryptionSettingsXAmzTargetEnumAwsGluePutDataCatalogEncryptionSettings PutDataCatalogEncryptionSettingsXAmzTargetEnum = "AWSGlue.PutDataCatalogEncryptionSettings"
)

type PutDataCatalogEncryptionSettingsHeaders struct {
	XAmzAlgorithm     *string                                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        PutDataCatalogEncryptionSettingsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
