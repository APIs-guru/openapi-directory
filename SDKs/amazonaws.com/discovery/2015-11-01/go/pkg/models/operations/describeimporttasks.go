package operations

import (
"openapi/pkg/models/shared")

type DescribeImportTasksQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}


type DescribeImportTasksXAmzTargetEnum string

const (
    DescribeImportTasksXAmzTargetEnumAwsPoseidonServiceV20151101DescribeImportTasks DescribeImportTasksXAmzTargetEnum = "AWSPoseidonService_V2015_11_01.DescribeImportTasks"
)


type DescribeImportTasksHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeImportTasksXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeImportTasksRequest struct {
    QueryParams DescribeImportTasksQueryParams 
    Headers DescribeImportTasksHeaders 
    Request shared.DescribeImportTasksRequest `request:"mediaType=application/json"`
    
}

type DescribeImportTasksResponse struct {
    AuthorizationErrorException *interface{} 
    ContentType string 
    DescribeImportTasksResponse *shared.DescribeImportTasksResponse 
    HomeRegionNotSetException *interface{} 
    InvalidParameterException *interface{} 
    InvalidParameterValueException *interface{} 
    ServerInternalErrorException *interface{} 
    StatusCode int64 
    
}

