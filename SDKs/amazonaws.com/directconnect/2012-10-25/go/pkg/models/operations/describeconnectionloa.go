package operations

import (
"openapi/pkg/models/shared")


type DescribeConnectionLoaXAmzTargetEnum string

const (
    DescribeConnectionLoaXAmzTargetEnumOvertureServiceDescribeConnectionLoa DescribeConnectionLoaXAmzTargetEnum = "OvertureService.DescribeConnectionLoa"
)


type DescribeConnectionLoaHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeConnectionLoaXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeConnectionLoaRequest struct {
    Headers DescribeConnectionLoaHeaders 
    Request shared.DescribeConnectionLoaRequest `request:"mediaType=application/json"`
    
}

type DescribeConnectionLoaResponse struct {
    ContentType string 
    DescribeConnectionLoaResponse *shared.DescribeConnectionLoaResponse 
    DirectConnectClientException *interface{} 
    DirectConnectServerException *interface{} 
    StatusCode int64 
    
}

