package operations

import (
"openapi/pkg/models/shared")


type DescribeVpcPeeringAuthorizationsXAmzTargetEnum string

const (
    DescribeVpcPeeringAuthorizationsXAmzTargetEnumGameLiftDescribeVpcPeeringAuthorizations DescribeVpcPeeringAuthorizationsXAmzTargetEnum = "GameLift.DescribeVpcPeeringAuthorizations"
)


type DescribeVpcPeeringAuthorizationsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeVpcPeeringAuthorizationsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeVpcPeeringAuthorizationsRequest struct {
    Headers DescribeVpcPeeringAuthorizationsHeaders 
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type DescribeVpcPeeringAuthorizationsResponse struct {
    ContentType string 
    DescribeVpcPeeringAuthorizationsOutput *shared.DescribeVpcPeeringAuthorizationsOutput 
    InternalServiceException *interface{} 
    InvalidRequestException *interface{} 
    StatusCode int64 
    UnauthorizedException *interface{} 
    
}

