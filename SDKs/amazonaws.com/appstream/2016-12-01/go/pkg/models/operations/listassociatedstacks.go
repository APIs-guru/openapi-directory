package operations

import (
"openapi/pkg/models/shared")


type ListAssociatedStacksXAmzTargetEnum string

const (
    ListAssociatedStacksXAmzTargetEnumPhotonAdminProxyServiceListAssociatedStacks ListAssociatedStacksXAmzTargetEnum = "PhotonAdminProxyService.ListAssociatedStacks"
)


type ListAssociatedStacksHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListAssociatedStacksXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListAssociatedStacksRequest struct {
    Headers ListAssociatedStacksHeaders 
    Request shared.ListAssociatedStacksRequest `request:"mediaType=application/json"`
    
}

type ListAssociatedStacksResponse struct {
    ContentType string 
    ListAssociatedStacksResult *shared.ListAssociatedStacksResult 
    StatusCode int64 
    
}

