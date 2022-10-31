package operations

import (
"openapi/pkg/models/shared")

type CreateDatastoreHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateDatastoreRequestBodyDatastorePartitions struct {
    Partitions []shared.DatastorePartition `json:"partitions,omitempty"`
    
}

type CreateDatastoreRequestBodyDatastoreStorage struct {
    CustomerManagedS3 *shared.CustomerManagedDatastoreS3Storage `json:"customerManagedS3,omitempty"`
    IotSiteWiseMultiLayerStorage *shared.DatastoreIotSiteWiseMultiLayerStorage `json:"iotSiteWiseMultiLayerStorage,omitempty"`
    ServiceManagedS3 map[string]interface{} `json:"serviceManagedS3,omitempty"`
    
}

type CreateDatastoreRequestBodyFileFormatConfiguration struct {
    JSONConfiguration map[string]interface{} `json:"jsonConfiguration,omitempty"`
    ParquetConfiguration *shared.ParquetConfiguration `json:"parquetConfiguration,omitempty"`
    
}

type CreateDatastoreRequestBodyRetentionPeriod struct {
    NumberOfDays *int64 `json:"numberOfDays,omitempty"`
    Unlimited *bool `json:"unlimited,omitempty"`
    
}

type CreateDatastoreRequestBody struct {
    DatastoreName string `json:"datastoreName"`
    DatastorePartitions *CreateDatastoreRequestBodyDatastorePartitions `json:"datastorePartitions,omitempty"`
    DatastoreStorage *CreateDatastoreRequestBodyDatastoreStorage `json:"datastoreStorage,omitempty"`
    FileFormatConfiguration *CreateDatastoreRequestBodyFileFormatConfiguration `json:"fileFormatConfiguration,omitempty"`
    RetentionPeriod *CreateDatastoreRequestBodyRetentionPeriod `json:"retentionPeriod,omitempty"`
    Tags []shared.Tag `json:"tags,omitempty"`
    
}

type CreateDatastoreRequest struct {
    Headers CreateDatastoreHeaders 
    Request CreateDatastoreRequestBody `request:"mediaType=application/json"`
    
}

type CreateDatastoreResponse struct {
    ContentType string 
    CreateDatastoreResponse *shared.CreateDatastoreResponse 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    LimitExceededException *interface{} 
    ResourceAlreadyExistsException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

