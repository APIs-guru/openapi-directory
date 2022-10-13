package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDatastorePathParams struct {
	DatastoreName string `pathParam:"style=simple,explode=false,name=datastoreName"`
}

type UpdateDatastoreHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateDatastoreRequestBodyDatastoreStorage struct {
	CustomerManagedS3            *shared.CustomerManagedDatastoreS3Storage     `json:"customerManagedS3"`
	IotSiteWiseMultiLayerStorage *shared.DatastoreIotSiteWiseMultiLayerStorage `json:"iotSiteWiseMultiLayerStorage"`
	ServiceManagedS3             map[string]interface{}                        `json:"serviceManagedS3"`
}

type UpdateDatastoreRequestBodyFileFormatConfiguration struct {
	JSONConfiguration    map[string]interface{}       `json:"jsonConfiguration"`
	ParquetConfiguration *shared.ParquetConfiguration `json:"parquetConfiguration"`
}

type UpdateDatastoreRequestBodyRetentionPeriod struct {
	NumberOfDays *int64 `json:"numberOfDays"`
	Unlimited    *bool  `json:"unlimited"`
}

type UpdateDatastoreRequestBody struct {
	DatastoreStorage        *UpdateDatastoreRequestBodyDatastoreStorage        `json:"datastoreStorage"`
	FileFormatConfiguration *UpdateDatastoreRequestBodyFileFormatConfiguration `json:"fileFormatConfiguration"`
	RetentionPeriod         *UpdateDatastoreRequestBodyRetentionPeriod         `json:"retentionPeriod"`
}

type UpdateDatastoreRequest struct {
	PathParams UpdateDatastorePathParams
	Headers    UpdateDatastoreHeaders
	Request    UpdateDatastoreRequestBody `request:"mediaType=application/json"`
}

type UpdateDatastoreResponse struct {
	ContentType                 string
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
}
