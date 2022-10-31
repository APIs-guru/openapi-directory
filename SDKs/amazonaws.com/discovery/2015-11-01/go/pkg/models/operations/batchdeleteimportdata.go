package operations

import (
"openapi/pkg/models/shared")


type BatchDeleteImportDataXAmzTargetEnum string

const (
    BatchDeleteImportDataXAmzTargetEnumAwsPoseidonServiceV20151101BatchDeleteImportData BatchDeleteImportDataXAmzTargetEnum = "AWSPoseidonService_V2015_11_01.BatchDeleteImportData"
)


type BatchDeleteImportDataHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget BatchDeleteImportDataXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type BatchDeleteImportDataRequest struct {
    Headers BatchDeleteImportDataHeaders 
    Request shared.BatchDeleteImportDataRequest `request:"mediaType=application/json"`
    
}

type BatchDeleteImportDataResponse struct {
    AuthorizationErrorException *interface{} 
    BatchDeleteImportDataResponse *shared.BatchDeleteImportDataResponse 
    ContentType string 
    HomeRegionNotSetException *interface{} 
    InvalidParameterException *interface{} 
    InvalidParameterValueException *interface{} 
    ServerInternalErrorException *interface{} 
    StatusCode int64 
    
}

