package operations

import (
"openapi/pkg/models/shared")


type DescribeHostedConnectionsXAmzTargetEnum string

const (
    DescribeHostedConnectionsXAmzTargetEnumOvertureServiceDescribeHostedConnections DescribeHostedConnectionsXAmzTargetEnum = "OvertureService.DescribeHostedConnections"
)


type DescribeHostedConnectionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeHostedConnectionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeHostedConnectionsRequest struct {
    Headers DescribeHostedConnectionsHeaders 
    Request shared.DescribeHostedConnectionsRequest `request:"mediaType=application/json"`
    
}

type DescribeHostedConnectionsResponse struct {
    Connections *shared.Connections 
    ContentType string 
    DirectConnectClientException *interface{} 
    DirectConnectServerException *interface{} 
    StatusCode int64 
    
}

