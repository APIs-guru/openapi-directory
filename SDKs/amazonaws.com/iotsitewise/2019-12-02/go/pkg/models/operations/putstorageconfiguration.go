package operations

import (
	"openapi/pkg/models/shared"
)

type PutStorageConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PutStorageConfigurationRequestBodyMultiLayerStorage struct {
	CustomerManagedS3Storage *shared.CustomerManagedS3Storage `json:"customerManagedS3Storage,omitempty"`
}

type PutStorageConfigurationRequestBodyStorageTypeEnum string

const (
	PutStorageConfigurationRequestBodyStorageTypeEnumSitewiseDefaultStorage PutStorageConfigurationRequestBodyStorageTypeEnum = "SITEWISE_DEFAULT_STORAGE"
	PutStorageConfigurationRequestBodyStorageTypeEnumMultiLayerStorage      PutStorageConfigurationRequestBodyStorageTypeEnum = "MULTI_LAYER_STORAGE"
)

type PutStorageConfigurationRequestBody struct {
	MultiLayerStorage *PutStorageConfigurationRequestBodyMultiLayerStorage `json:"multiLayerStorage,omitempty"`
	StorageType       PutStorageConfigurationRequestBodyStorageTypeEnum    `json:"storageType"`
}

type PutStorageConfigurationRequest struct {
	Headers PutStorageConfigurationHeaders
	Request PutStorageConfigurationRequestBody `request:"mediaType=application/json"`
}

type PutStorageConfigurationResponse struct {
	ConflictingOperationException   *interface{}
	ContentType                     string
	InternalFailureException        *interface{}
	InvalidRequestException         *interface{}
	LimitExceededException          *interface{}
	PutStorageConfigurationResponse *shared.PutStorageConfigurationResponse
	ResourceAlreadyExistsException  *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
	ThrottlingException             *interface{}
}
