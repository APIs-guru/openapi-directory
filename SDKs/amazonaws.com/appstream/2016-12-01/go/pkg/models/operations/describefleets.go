package operations

import (
"openapi/pkg/models/shared")


type DescribeFleetsXAmzTargetEnum string

const (
    DescribeFleetsXAmzTargetEnumPhotonAdminProxyServiceDescribeFleets DescribeFleetsXAmzTargetEnum = "PhotonAdminProxyService.DescribeFleets"
)


type DescribeFleetsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeFleetsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeFleetsRequest struct {
    Headers DescribeFleetsHeaders 
    Request shared.DescribeFleetsRequest `request:"mediaType=application/json"`
    
}

type DescribeFleetsResponse struct {
    ContentType string 
    DescribeFleetsResult *shared.DescribeFleetsResult 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

