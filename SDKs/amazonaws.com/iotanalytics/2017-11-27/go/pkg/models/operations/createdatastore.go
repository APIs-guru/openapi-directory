package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDatastoreHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateDatastoreRequestBodyDatastorePartitions struct {
	Partitions []shared.DatastorePartition `json:"partitions"`
}

type CreateDatastoreRequestBodyDatastoreStorage struct {
	CustomerManagedS3            *shared.CustomerManagedDatastoreS3Storage     `json:"customerManagedS3"`
	IotSiteWiseMultiLayerStorage *shared.DatastoreIotSiteWiseMultiLayerStorage `json:"iotSiteWiseMultiLayerStorage"`
	ServiceManagedS3             map[string]interface{}                        `json:"serviceManagedS3"`
}

type CreateDatastoreRequestBodyFileFormatConfiguration struct {
	JSONConfiguration    map[string]interface{}       `json:"jsonConfiguration"`
	ParquetConfiguration *shared.ParquetConfiguration `json:"parquetConfiguration"`
}

type CreateDatastoreRequestBodyRetentionPeriod struct {
	NumberOfDays *int64 `json:"numberOfDays"`
	Unlimited    *bool  `json:"unlimited"`
}

type CreateDatastoreRequestBody struct {
	DatastoreName           string                                             `json:"datastoreName"`
	DatastorePartitions     *CreateDatastoreRequestBodyDatastorePartitions     `json:"datastorePartitions"`
	DatastoreStorage        *CreateDatastoreRequestBodyDatastoreStorage        `json:"datastoreStorage"`
	FileFormatConfiguration *CreateDatastoreRequestBodyFileFormatConfiguration `json:"fileFormatConfiguration"`
	RetentionPeriod         *CreateDatastoreRequestBodyRetentionPeriod         `json:"retentionPeriod"`
	Tags                    []shared.Tag                                       `json:"tags"`
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
