package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDatastorePathParams struct {
	DatastoreName string `pathParam:"style=simple,explode=false,name=datastoreName"`
}

type UpdateDatastoreHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// UpdateDatastoreRequestBodyDatastoreStorage
// Where data in a data store is stored.. You can choose <code>serviceManagedS3</code> storage, <code>customerManagedS3</code> storage, or <code>iotSiteWiseMultiLayerStorage</code> storage. The default is <code>serviceManagedS3</code>. You can't change the choice of Amazon S3 storage after your data store is created.
type UpdateDatastoreRequestBodyDatastoreStorage struct {
	CustomerManagedS3            *shared.CustomerManagedDatastoreS3Storage     `json:"customerManagedS3,omitempty"`
	IotSiteWiseMultiLayerStorage *shared.DatastoreIotSiteWiseMultiLayerStorage `json:"iotSiteWiseMultiLayerStorage,omitempty"`
	ServiceManagedS3             map[string]interface{}                        `json:"serviceManagedS3,omitempty"`
}

// UpdateDatastoreRequestBodyFileFormatConfiguration
// <p>Contains the configuration information of file formats. IoT Analytics data stores support JSON and <a href="https://parquet.apache.org/">Parquet</a>.</p> <p>The default file format is JSON. You can specify only one format.</p> <p>You can't change the file format after you create the data store.</p>
type UpdateDatastoreRequestBodyFileFormatConfiguration struct {
	JSONConfiguration    map[string]interface{}       `json:"jsonConfiguration,omitempty"`
	ParquetConfiguration *shared.ParquetConfiguration `json:"parquetConfiguration,omitempty"`
}

// UpdateDatastoreRequestBodyRetentionPeriod
// How long, in days, message data is kept.
type UpdateDatastoreRequestBodyRetentionPeriod struct {
	NumberOfDays *int64 `json:"numberOfDays,omitempty"`
	Unlimited    *bool  `json:"unlimited,omitempty"`
}

type UpdateDatastoreRequestBody struct {
	DatastoreStorage        *UpdateDatastoreRequestBodyDatastoreStorage        `json:"datastoreStorage,omitempty"`
	FileFormatConfiguration *UpdateDatastoreRequestBodyFileFormatConfiguration `json:"fileFormatConfiguration,omitempty"`
	RetentionPeriod         *UpdateDatastoreRequestBodyRetentionPeriod         `json:"retentionPeriod,omitempty"`
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
