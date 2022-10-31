package operations

import (
"openapi/pkg/models/shared")


type DescribeRefreshSchemasStatusXAmzTargetEnum string

const (
    DescribeRefreshSchemasStatusXAmzTargetEnumAmazonDmSv20160101DescribeRefreshSchemasStatus DescribeRefreshSchemasStatusXAmzTargetEnum = "AmazonDMSv20160101.DescribeRefreshSchemasStatus"
)


type DescribeRefreshSchemasStatusHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeRefreshSchemasStatusXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeRefreshSchemasStatusRequest struct {
    Headers DescribeRefreshSchemasStatusHeaders 
    Request shared.DescribeRefreshSchemasStatusMessage `request:"mediaType=application/json"`
    
}

type DescribeRefreshSchemasStatusResponse struct {
    ContentType string 
    DescribeRefreshSchemasStatusResponse *shared.DescribeRefreshSchemasStatusResponse 
    InvalidResourceStateFault *interface{} 
    ResourceNotFoundFault *interface{} 
    StatusCode int64 
    
}

