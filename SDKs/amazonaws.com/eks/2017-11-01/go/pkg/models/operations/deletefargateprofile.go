package operations

import (
"openapi/pkg/models/shared")

type DeleteFargateProfilePathParams struct {
    FargateProfileName string `pathParam:"style=simple,explode=false,name=fargateProfileName"`
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type DeleteFargateProfileHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteFargateProfileRequest struct {
    PathParams DeleteFargateProfilePathParams 
    Headers DeleteFargateProfileHeaders 
    
}

type DeleteFargateProfileResponse struct {
    ClientException *interface{} 
    ContentType string 
    DeleteFargateProfileResponse *shared.DeleteFargateProfileResponse 
    InvalidParameterException *interface{} 
    ResourceNotFoundException *interface{} 
    ServerException *interface{} 
    StatusCode int64 
    
}

