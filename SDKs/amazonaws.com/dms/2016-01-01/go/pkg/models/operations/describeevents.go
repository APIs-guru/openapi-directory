package operations

import (
"openapi/pkg/models/shared")

type DescribeEventsQueryParams struct {
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
    
}


type DescribeEventsXAmzTargetEnum string

const (
    DescribeEventsXAmzTargetEnumAmazonDmSv20160101DescribeEvents DescribeEventsXAmzTargetEnum = "AmazonDMSv20160101.DescribeEvents"
)


type DescribeEventsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeEventsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeEventsRequest struct {
    QueryParams DescribeEventsQueryParams 
    Headers DescribeEventsHeaders 
    Request shared.DescribeEventsMessage `request:"mediaType=application/json"`
    
}

type DescribeEventsResponse struct {
    ContentType string 
    DescribeEventsResponse *shared.DescribeEventsResponse 
    StatusCode int64 
    
}

