package operations

import (
"openapi/pkg/models/shared")

type UpdateDatastorePathParams struct {
    DatastoreName string `pathParam:"style=simple,explode=false,name=datastoreName"`
    
}

type UpdateDatastoreHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateDatastoreRequestBodyDatastoreStorage struct {
    CustomerManagedS3 *shared.CustomerManagedDatastoreS3Storage `json:"customerManagedS3,omitempty"`
    IotSiteWiseMultiLayerStorage *shared.DatastoreIotSiteWiseMultiLayerStorage `json:"iotSiteWiseMultiLayerStorage,omitempty"`
    ServiceManagedS3 map[string]interface{} `json:"serviceManagedS3,omitempty"`
    
}

type UpdateDatastoreRequestBodyFileFormatConfiguration struct {
    JSONConfiguration map[string]interface{} `json:"jsonConfiguration,omitempty"`
    ParquetConfiguration *shared.ParquetConfiguration `json:"parquetConfiguration,omitempty"`
    
}

type UpdateDatastoreRequestBodyRetentionPeriod struct {
    NumberOfDays *int64 `json:"numberOfDays,omitempty"`
    Unlimited *bool `json:"unlimited,omitempty"`
    
}

type UpdateDatastoreRequestBody struct {
    DatastoreStorage *UpdateDatastoreRequestBodyDatastoreStorage `json:"datastoreStorage,omitempty"`
    FileFormatConfiguration *UpdateDatastoreRequestBodyFileFormatConfiguration `json:"fileFormatConfiguration,omitempty"`
    RetentionPeriod *UpdateDatastoreRequestBodyRetentionPeriod `json:"retentionPeriod,omitempty"`
    
}

type UpdateDatastoreRequest struct {
    PathParams UpdateDatastorePathParams 
    Headers UpdateDatastoreHeaders 
    Request UpdateDatastoreRequestBody `request:"mediaType=application/json"`
    
}

type UpdateDatastoreResponse struct {
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

