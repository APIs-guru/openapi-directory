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
    Description *string `json:"description,omitempty"`
    Name string `json:"name"`
    Tags map[string]string `json:"tags,omitempty"`
    TargetArns []string `json:"targetArns"`
    
}

type CreateVpcLinkRequest struct {
    Headers CreateVpcLinkHeaders 
    Request CreateVpcLinkRequestBody `request:"mediaType=application/json"`
    
}

type CreateVpcLinkResponse struct {
    BadRequestException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    LimitExceededException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UnauthorizedException *interface{} 
    VpcLink *shared.VpcLink 
    
}

