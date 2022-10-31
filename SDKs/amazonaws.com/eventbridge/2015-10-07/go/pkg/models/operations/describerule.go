package operations

import (
"openapi/pkg/models/shared")


type DescribeRuleXAmzTargetEnum string

const (
    DescribeRuleXAmzTargetEnumAwsEventsDescribeRule DescribeRuleXAmzTargetEnum = "AWSEvents.DescribeRule"
)


type DescribeRuleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeRuleXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeRuleRequest struct {
    Headers DescribeRuleHeaders 
    Request shared.DescribeRuleRequest `request:"mediaType=application/json"`
    
}

type DescribeRuleResponse struct {
    ContentType string 
    DescribeRuleResponse *shared.DescribeRuleResponse 
    InternalException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

