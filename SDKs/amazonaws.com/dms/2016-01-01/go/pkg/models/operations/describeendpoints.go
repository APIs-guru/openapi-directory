package operations

import (
"openapi/pkg/models/shared")

type DescribeEndpointsQueryParams struct {
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
    
}


type DescribeEndpointsXAmzTargetEnum string

const (
    DescribeEndpointsXAmzTargetEnumAmazonDmSv20160101DescribeEndpoints DescribeEndpointsXAmzTargetEnum = "AmazonDMSv20160101.DescribeEndpoints"
)


type DescribeEndpointsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeEndpointsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeEndpointsRequest struct {
    QueryParams DescribeEndpointsQueryParams 
    Headers DescribeEndpointsHeaders 
    Request shared.DescribeEndpointsMessage `request:"mediaType=application/json"`
    
}

type DescribeEndpointsResponse struct {
    ContentType string 
    DescribeEndpointsResponse *shared.DescribeEndpointsResponse 
    ResourceNotFoundFault *interface{} 
    StatusCode int64 
    
}

