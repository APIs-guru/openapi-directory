package operations

import (
"openapi/pkg/models/shared")


type DescribeConnectionsOnInterconnectXAmzTargetEnum string

const (
    DescribeConnectionsOnInterconnectXAmzTargetEnumOvertureServiceDescribeConnectionsOnInterconnect DescribeConnectionsOnInterconnectXAmzTargetEnum = "OvertureService.DescribeConnectionsOnInterconnect"
)


type DescribeConnectionsOnInterconnectHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeConnectionsOnInterconnectXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeConnectionsOnInterconnectRequest struct {
    Headers DescribeConnectionsOnInterconnectHeaders 
    Request shared.DescribeConnectionsOnInterconnectRequest `request:"mediaType=application/json"`
    
}

type DescribeConnectionsOnInterconnectResponse struct {
    Connections *shared.Connections 
    ContentType string 
    DirectConnectClientException *interface{} 
    DirectConnectServerException *interface{} 
    StatusCode int64 
    
}

