package operations

import (
"openapi/pkg/models/shared")


type DescribeUserStackAssociationsXAmzTargetEnum string

const (
    DescribeUserStackAssociationsXAmzTargetEnumPhotonAdminProxyServiceDescribeUserStackAssociations DescribeUserStackAssociationsXAmzTargetEnum = "PhotonAdminProxyService.DescribeUserStackAssociations"
)


type DescribeUserStackAssociationsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeUserStackAssociationsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeUserStackAssociationsRequest struct {
    Headers DescribeUserStackAssociationsHeaders 
    Request shared.DescribeUserStackAssociationsRequest `request:"mediaType=application/json"`
    
}

type DescribeUserStackAssociationsResponse struct {
    ContentType string 
    DescribeUserStackAssociationsResult *shared.DescribeUserStackAssociationsResult 
    InvalidParameterCombinationException *interface{} 
    OperationNotPermittedException *interface{} 
    StatusCode int64 
    
}

