package operations

import (
"openapi/pkg/models/shared")


type DescribeHsmXAmzTargetEnum string

const (
    DescribeHsmXAmzTargetEnumCloudHsmFrontendServiceDescribeHsm DescribeHsmXAmzTargetEnum = "CloudHsmFrontendService.DescribeHsm"
)


type DescribeHsmHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeHsmXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeHsmRequest struct {
    Headers DescribeHsmHeaders 
    Request shared.DescribeHsmRequest `request:"mediaType=application/json"`
    
}

type DescribeHsmResponse struct {
    CloudHsmInternalException *interface{} 
    CloudHsmServiceException *interface{} 
    ContentType string 
    DescribeHsmResponse *shared.DescribeHsmResponse 
    InvalidRequestException *interface{} 
    StatusCode int64 
    
}

