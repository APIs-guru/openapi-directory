package operations

import (
"openapi/pkg/models/shared")

type DescribeSchemasQueryParams struct {
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
    
}


type DescribeSchemasXAmzTargetEnum string

const (
    DescribeSchemasXAmzTargetEnumAmazonDmSv20160101DescribeSchemas DescribeSchemasXAmzTargetEnum = "AmazonDMSv20160101.DescribeSchemas"
)


type DescribeSchemasHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeSchemasXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeSchemasRequest struct {
    QueryParams DescribeSchemasQueryParams 
    Headers DescribeSchemasHeaders 
    Request shared.DescribeSchemasMessage `request:"mediaType=application/json"`
    
}

type DescribeSchemasResponse struct {
    ContentType string 
    DescribeSchemasResponse *shared.DescribeSchemasResponse 
    InvalidResourceStateFault *interface{} 
    ResourceNotFoundFault *interface{} 
    StatusCode int64 
    
}

