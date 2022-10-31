package operations

import (
"openapi/pkg/models/shared")


type ListCuratedEnvironmentImagesXAmzTargetEnum string

const (
    ListCuratedEnvironmentImagesXAmzTargetEnumCodeBuild20161006ListCuratedEnvironmentImages ListCuratedEnvironmentImagesXAmzTargetEnum = "CodeBuild_20161006.ListCuratedEnvironmentImages"
)


type ListCuratedEnvironmentImagesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListCuratedEnvironmentImagesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListCuratedEnvironmentImagesRequest struct {
    Headers ListCuratedEnvironmentImagesHeaders 
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type ListCuratedEnvironmentImagesResponse struct {
    ContentType string 
    ListCuratedEnvironmentImagesOutput *shared.ListCuratedEnvironmentImagesOutput 
    StatusCode int64 
    
}

