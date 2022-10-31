package operations

import (
"openapi/pkg/models/shared")


type DescribePartnerEventSourceXAmzTargetEnum string

const (
    DescribePartnerEventSourceXAmzTargetEnumAwsEventsDescribePartnerEventSource DescribePartnerEventSourceXAmzTargetEnum = "AWSEvents.DescribePartnerEventSource"
)


type DescribePartnerEventSourceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribePartnerEventSourceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribePartnerEventSourceRequest struct {
    Headers DescribePartnerEventSourceHeaders 
    Request shared.DescribePartnerEventSourceRequest `request:"mediaType=application/json"`
    
}

type DescribePartnerEventSourceResponse struct {
    ContentType string 
    DescribePartnerEventSourceResponse *shared.DescribePartnerEventSourceResponse 
    InternalException *interface{} 
    OperationDisabledException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

