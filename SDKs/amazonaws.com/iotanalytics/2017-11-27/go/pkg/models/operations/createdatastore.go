package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDatastoreHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// CreateDatastoreRequestBodyDatastorePartitions
//
//	Contains information about the partition dimensions in a data store.
type CreateDatastoreRequestBodyDatastorePartitions struct {
	Partitions []shared.DatastorePartition `json:"partitions,omitempty"`
}

// CreateDatastoreRequestBodyDatastoreStorage
// Where data in a data store is stored.. You can choose <code>serviceManagedS3</code> storage, <code>customerManagedS3</code> storage, or <code>iotSiteWiseMultiLayerStorage</code> storage. The default is <code>serviceManagedS3</code>. You can't change the choice of Amazon S3 storage after your data store is created.
type CreateDatastoreRequestBodyDatastoreStorage struct {
	CustomerManagedS3            *shared.CustomerManagedDatastoreS3Storage     `json:"customerManagedS3,omitempty"`
	IotSiteWiseMultiLayerStorage *shared.DatastoreIotSiteWiseMultiLayerStorage `json:"iotSiteWiseMultiLayerStorage,omitempty"`
	ServiceManagedS3             map[string]interface{}                        `json:"serviceManagedS3,omitempty"`
}

// CreateDatastoreRequestBodyFileFormatConfiguration
// <p>Contains the configuration information of file formats. IoT Analytics data stores support JSON and <a href="https://parquet.apache.org/">Parquet</a>.</p> <p>The default file format is JSON. You can specify only one format.</p> <p>You can't change the file format after you create the data store.</p>
type CreateDatastoreRequestBodyFileFormatConfiguration struct {
	JSONConfiguration    map[string]interface{}       `json:"jsonConfiguration,omitempty"`
	ParquetConfiguration *shared.ParquetConfiguration `json:"parquetConfiguration,omitempty"`
}

// CreateDatastoreRequestBodyRetentionPeriod
// How long, in days, message data is kept.
type CreateDatastoreRequestBodyRetentionPeriod struct {
	NumberOfDays *int64 `json:"numberOfDays,omitempty"`
	Unlimited    *bool  `json:"unlimited,omitempty"`
}

type CreateDatastoreRequestBody struct {
	DatastoreName           string                                             `json:"datastoreName"`
	DatastorePartitions     *CreateDatastoreRequestBodyDatastorePartitions     `json:"datastorePartitions,omitempty"`
	DatastoreStorage        *CreateDatastoreRequestBodyDatastoreStorage        `json:"datastoreStorage,omitempty"`
	FileFormatConfiguration *CreateDatastoreRequestBodyFileFormatConfiguration `json:"fileFormatConfiguration,omitempty"`
	RetentionPeriod         *CreateDatastoreRequestBodyRetentionPeriod         `json:"retentionPeriod,omitempty"`
	Tags                    []shared.Tag                                       `json:"tags,omitempty"`
}

type CreateDatastoreRequest struct {
	Headers CreateDatastoreHeaders
	Request CreateDatastoreRequestBody `request:"mediaType=application/json"`
}

type CreateDatastoreResponse struct {
	ContentType                    string
	CreateDatastoreResponse        *shared.CreateDatastoreResponse
	InternalFailureException       *interface{}
	InvalidRequestException        *interface{}
	LimitExceededException         *interface{}
	ResourceAlreadyExistsException *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
}
