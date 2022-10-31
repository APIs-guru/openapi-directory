package operations

import (
"openapi/pkg/models/shared")


type DescribeInterconnectsXAmzTargetEnum string

const (
    DescribeInterconnectsXAmzTargetEnumOvertureServiceDescribeInterconnects DescribeInterconnectsXAmzTargetEnum = "OvertureService.DescribeInterconnects"
)


type DescribeInterconnectsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeInterconnectsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeInterconnectsRequest struct {
    Headers DescribeInterconnectsHeaders 
    Request shared.DescribeInterconnectsRequest `request:"mediaType=application/json"`
    
}

type DescribeInterconnectsResponse struct {
    ContentType string 
    DirectConnectClientException *interface{} 
    DirectConnectServerException *interface{} 
    Interconnects *shared.Interconnects 
    StatusCode int64 
    
}

