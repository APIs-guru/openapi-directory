package operations

import (
"openapi/pkg/models/shared")


type CreateConnectionXAmzTargetEnum string

const (
    CreateConnectionXAmzTargetEnumComAmazonawsCodestarConnectionsCodeStarConnections20191201CreateConnection CreateConnectionXAmzTargetEnum = "com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateConnection"
)


type CreateConnectionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateConnectionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateConnectionRequest struct {
    Headers CreateConnectionHeaders 
    Request shared.CreateConnectionInput `request:"mediaType=application/json"`
    
}

type CreateConnectionResponse struct {
    ContentType string 
    CreateConnectionOutput *shared.CreateConnectionOutput 
    LimitExceededException *interface{} 
    ResourceNotFoundException *interface{} 
    ResourceUnavailableException *interface{} 
    StatusCode int64 
    
}

