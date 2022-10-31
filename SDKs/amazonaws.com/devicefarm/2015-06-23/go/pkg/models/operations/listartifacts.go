package operations

import (
"openapi/pkg/models/shared")

type ListArtifactsQueryParams struct {
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}


type ListArtifactsXAmzTargetEnum string

const (
    ListArtifactsXAmzTargetEnumDeviceFarm20150623ListArtifacts ListArtifactsXAmzTargetEnum = "DeviceFarm_20150623.ListArtifacts"
)


type ListArtifactsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListArtifactsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListArtifactsRequest struct {
    QueryParams ListArtifactsQueryParams 
    Headers ListArtifactsHeaders 
    Request shared.ListArtifactsRequest `request:"mediaType=application/json"`
    
}

type ListArtifactsResponse struct {
    ArgumentException *interface{} 
    ContentType string 
    LimitExceededException *interface{} 
    ListArtifactsResult *shared.ListArtifactsResult 
    NotFoundException *interface{} 
    ServiceAccountException *interface{} 
    StatusCode int64 
    
}

