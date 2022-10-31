package operations

import (
"openapi/pkg/models/shared")


type DescribeLagsXAmzTargetEnum string

const (
    DescribeLagsXAmzTargetEnumOvertureServiceDescribeLags DescribeLagsXAmzTargetEnum = "OvertureService.DescribeLags"
)


type DescribeLagsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeLagsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeLagsRequest struct {
    Headers DescribeLagsHeaders 
    Request shared.DescribeLagsRequest `request:"mediaType=application/json"`
    
}

type DescribeLagsResponse struct {
    ContentType string 
    DirectConnectClientException *interface{} 
    DirectConnectServerException *interface{} 
    Lags *shared.Lags 
    StatusCode int64 
    
}

