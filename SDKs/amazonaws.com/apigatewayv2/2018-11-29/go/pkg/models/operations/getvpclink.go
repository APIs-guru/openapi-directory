package operations

import (
"openapi/pkg/models/shared")

type GetVpcLinkPathParams struct {
    VpcLinkID string `pathParam:"style=simple,explode=false,name=vpcLinkId"`
    
}

type GetVpcLinkHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetVpcLinkRequest struct {
    PathParams GetVpcLinkPathParams 
    Headers GetVpcLinkHeaders 
    
}

type GetVpcLinkResponse struct {
    ContentType string 
    GetVpcLinkResponse *shared.GetVpcLinkResponse 
    NotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

