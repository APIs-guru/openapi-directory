package operations

import (
"openapi/pkg/models/shared")


type StopBgpFailoverTestXAmzTargetEnum string

const (
    StopBgpFailoverTestXAmzTargetEnumOvertureServiceStopBgpFailoverTest StopBgpFailoverTestXAmzTargetEnum = "OvertureService.StopBgpFailoverTest"
)


type StopBgpFailoverTestHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StopBgpFailoverTestXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StopBgpFailoverTestRequest struct {
    Headers StopBgpFailoverTestHeaders 
    Request shared.StopBgpFailoverTestRequest `request:"mediaType=application/json"`
    
}

type StopBgpFailoverTestResponse struct {
    ContentType string 
    DirectConnectClientException *interface{} 
    DirectConnectServerException *interface{} 
    StatusCode int64 
    StopBgpFailoverTestResponse *shared.StopBgpFailoverTestResponse 
    
}

