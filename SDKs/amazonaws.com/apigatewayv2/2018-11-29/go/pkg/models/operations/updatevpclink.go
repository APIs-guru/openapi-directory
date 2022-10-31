package operations

import (
"openapi/pkg/models/shared")

type UpdateVpcLinkPathParams struct {
    VpcLinkID string `pathParam:"style=simple,explode=false,name=vpcLinkId"`
    
}

type UpdateVpcLinkHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateVpcLinkRequestBody struct {
    Name *string `json:"name,omitempty"`
    
}

type UpdateVpcLinkRequest struct {
    PathParams UpdateVpcLinkPathParams 
    Headers UpdateVpcLinkHeaders 
    Request UpdateVpcLinkRequestBody `request:"mediaType=application/json"`
    
}

type UpdateVpcLinkResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    NotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UpdateVpcLinkResponse *shared.UpdateVpcLinkResponse 
    
}

