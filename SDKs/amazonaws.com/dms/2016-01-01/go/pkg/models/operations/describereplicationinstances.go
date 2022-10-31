package operations

import (
"openapi/pkg/models/shared")

type DescribeReplicationInstancesQueryParams struct {
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
    
}


type DescribeReplicationInstancesXAmzTargetEnum string

const (
    DescribeReplicationInstancesXAmzTargetEnumAmazonDmSv20160101DescribeReplicationInstances DescribeReplicationInstancesXAmzTargetEnum = "AmazonDMSv20160101.DescribeReplicationInstances"
)


type DescribeReplicationInstancesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeReplicationInstancesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeReplicationInstancesRequest struct {
    QueryParams DescribeReplicationInstancesQueryParams 
    Headers DescribeReplicationInstancesHeaders 
    Request shared.DescribeReplicationInstancesMessage `request:"mediaType=application/json"`
    
}

type DescribeReplicationInstancesResponse struct {
    ContentType string 
    DescribeReplicationInstancesResponse *shared.DescribeReplicationInstancesResponse 
    ResourceNotFoundFault *interface{} 
    StatusCode int64 
    
}

