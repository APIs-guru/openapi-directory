package operations

import (
"openapi/pkg/models/shared")


type DescribeObservationXAmzTargetEnum string

const (
    DescribeObservationXAmzTargetEnumEc2WindowsBarleyServiceDescribeObservation DescribeObservationXAmzTargetEnum = "EC2WindowsBarleyService.DescribeObservation"
)


type DescribeObservationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeObservationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeObservationRequest struct {
    Headers DescribeObservationHeaders 
    Request shared.DescribeObservationRequest `request:"mediaType=application/json"`
    
}

type DescribeObservationResponse struct {
    ContentType string 
    DescribeObservationResponse *shared.DescribeObservationResponse 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

