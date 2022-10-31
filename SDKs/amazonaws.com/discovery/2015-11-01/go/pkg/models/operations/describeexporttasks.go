package operations

import (
"openapi/pkg/models/shared")


type DescribeExportTasksXAmzTargetEnum string

const (
    DescribeExportTasksXAmzTargetEnumAwsPoseidonServiceV20151101DescribeExportTasks DescribeExportTasksXAmzTargetEnum = "AWSPoseidonService_V2015_11_01.DescribeExportTasks"
)


type DescribeExportTasksHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeExportTasksXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeExportTasksRequest struct {
    Headers DescribeExportTasksHeaders 
    Request shared.DescribeExportTasksRequest `request:"mediaType=application/json"`
    
}

type DescribeExportTasksResponse struct {
    AuthorizationErrorException *interface{} 
    ContentType string 
    DescribeExportTasksResponse *shared.DescribeExportTasksResponse 
    HomeRegionNotSetException *interface{} 
    InvalidParameterException *interface{} 
    InvalidParameterValueException *interface{} 
    ServerInternalErrorException *interface{} 
    StatusCode int64 
    
}

