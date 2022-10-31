package operations

import (
"openapi/pkg/models/shared")

type DescribeRemediationExecutionStatusQueryParams struct {
    Limit *string `queryParam:"style=form,explode=true,name=Limit"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type DescribeRemediationExecutionStatusXAmzTargetEnum string

const (
    DescribeRemediationExecutionStatusXAmzTargetEnumStarlingDoveServiceDescribeRemediationExecutionStatus DescribeRemediationExecutionStatusXAmzTargetEnum = "StarlingDoveService.DescribeRemediationExecutionStatus"
)


type DescribeRemediationExecutionStatusHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeRemediationExecutionStatusXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeRemediationExecutionStatusRequest struct {
    QueryParams DescribeRemediationExecutionStatusQueryParams 
    Headers DescribeRemediationExecutionStatusHeaders 
    Request shared.DescribeRemediationExecutionStatusRequest `request:"mediaType=application/json"`
    
}

type DescribeRemediationExecutionStatusResponse struct {
    ContentType string 
    DescribeRemediationExecutionStatusResponse *shared.DescribeRemediationExecutionStatusResponse 
    InvalidNextTokenException *interface{} 
    InvalidParameterValueException *interface{} 
    NoSuchRemediationConfigurationException *interface{} 
    StatusCode int64 
    
}

