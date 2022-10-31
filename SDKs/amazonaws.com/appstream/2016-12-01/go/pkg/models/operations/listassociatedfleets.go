package operations

import (
"openapi/pkg/models/shared")


type ListAssociatedFleetsXAmzTargetEnum string

const (
    ListAssociatedFleetsXAmzTargetEnumPhotonAdminProxyServiceListAssociatedFleets ListAssociatedFleetsXAmzTargetEnum = "PhotonAdminProxyService.ListAssociatedFleets"
)


type ListAssociatedFleetsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListAssociatedFleetsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListAssociatedFleetsRequest struct {
    Headers ListAssociatedFleetsHeaders 
    Request shared.ListAssociatedFleetsRequest `request:"mediaType=application/json"`
    
}

type ListAssociatedFleetsResponse struct {
    ContentType string 
    ListAssociatedFleetsResult *shared.ListAssociatedFleetsResult 
    StatusCode int64 
    
}

