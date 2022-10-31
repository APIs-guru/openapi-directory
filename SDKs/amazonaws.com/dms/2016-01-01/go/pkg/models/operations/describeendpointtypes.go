package operations

import (
"openapi/pkg/models/shared")

type DescribeEndpointTypesQueryParams struct {
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
    
}


type DescribeEndpointTypesXAmzTargetEnum string

const (
    DescribeEndpointTypesXAmzTargetEnumAmazonDmSv20160101DescribeEndpointTypes DescribeEndpointTypesXAmzTargetEnum = "AmazonDMSv20160101.DescribeEndpointTypes"
)


type DescribeEndpointTypesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeEndpointTypesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeEndpointTypesRequest struct {
    QueryParams DescribeEndpointTypesQueryParams 
    Headers DescribeEndpointTypesHeaders 
    Request shared.DescribeEndpointTypesMessage `request:"mediaType=application/json"`
    
}

type DescribeEndpointTypesResponse struct {
    ContentType string 
    DescribeEndpointTypesResponse *shared.DescribeEndpointTypesResponse 
    StatusCode int64 
    
}

