package operations

import (
"openapi/pkg/models/shared")

type CreateVpcLinkHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateVpcLinkRequestBody struct {
    Name string `json:"name"`
    SecurityGroupIds []string `json:"securityGroupIds,omitempty"`
    SubnetIds []string `json:"subnetIds"`
    Tags map[string]string `json:"tags,omitempty"`
    
}

type CreateVpcLinkRequest struct {
    Headers CreateVpcLinkHeaders 
    Request CreateVpcLinkRequestBody `request:"mediaType=application/json"`
    
}

type CreateVpcLinkResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    CreateVpcLinkResponse *shared.CreateVpcLinkResponse 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

