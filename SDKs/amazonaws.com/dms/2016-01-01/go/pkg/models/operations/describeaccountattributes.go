package operations

import (
"openapi/pkg/models/shared")


type DescribeAccountAttributesXAmzTargetEnum string

const (
    DescribeAccountAttributesXAmzTargetEnumAmazonDmSv20160101DescribeAccountAttributes DescribeAccountAttributesXAmzTargetEnum = "AmazonDMSv20160101.DescribeAccountAttributes"
)


type DescribeAccountAttributesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeAccountAttributesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeAccountAttributesRequest struct {
    Headers DescribeAccountAttributesHeaders 
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type DescribeAccountAttributesResponse struct {
    ContentType string 
    DescribeAccountAttributesResponse *shared.DescribeAccountAttributesResponse 
    StatusCode int64 
    
}

