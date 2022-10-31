package operations

import (
"openapi/pkg/models/shared")

type ListTestGridSessionArtifactsQueryParams struct {
    MaxResult *string `queryParam:"style=form,explode=true,name=maxResult"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}


type ListTestGridSessionArtifactsXAmzTargetEnum string

const (
    ListTestGridSessionArtifactsXAmzTargetEnumDeviceFarm20150623ListTestGridSessionArtifacts ListTestGridSessionArtifactsXAmzTargetEnum = "DeviceFarm_20150623.ListTestGridSessionArtifacts"
)


type ListTestGridSessionArtifactsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListTestGridSessionArtifactsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListTestGridSessionArtifactsRequest struct {
    QueryParams ListTestGridSessionArtifactsQueryParams 
    Headers ListTestGridSessionArtifactsHeaders 
    Request shared.ListTestGridSessionArtifactsRequest `request:"mediaType=application/json"`
    
}

type ListTestGridSessionArtifactsResponse struct {
    ArgumentException *interface{} 
    ContentType string 
    InternalServiceException *interface{} 
    ListTestGridSessionArtifactsResult *shared.ListTestGridSessionArtifactsResult 
    NotFoundException *interface{} 
    StatusCode int64 
    
}

