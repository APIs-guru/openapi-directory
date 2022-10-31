package operations

import (
"openapi/pkg/models/shared")


type DeleteHostXAmzTargetEnum string

const (
    DeleteHostXAmzTargetEnumComAmazonawsCodestarConnectionsCodeStarConnections20191201DeleteHost DeleteHostXAmzTargetEnum = "com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteHost"
)


type DeleteHostHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteHostXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteHostRequest struct {
    Headers DeleteHostHeaders 
    Request shared.DeleteHostInput `request:"mediaType=application/json"`
    
}

type DeleteHostResponse struct {
    ContentType string 
    DeleteHostOutput map[string]interface{} 
    ResourceNotFoundException *interface{} 
    ResourceUnavailableException *interface{} 
    StatusCode int64 
    
}

