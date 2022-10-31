package operations

import (
"openapi/pkg/models/shared")

type DescribeAccountAuditConfigurationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DescribeAccountAuditConfigurationRequest struct {
    Headers DescribeAccountAuditConfigurationHeaders 
    
}

type DescribeAccountAuditConfigurationResponse struct {
    ContentType string 
    DescribeAccountAuditConfigurationResponse *shared.DescribeAccountAuditConfigurationResponse 
    InternalFailureException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

