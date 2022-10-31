package operations

import (
"openapi/pkg/models/shared")

type ListDeploymentConfigsQueryParams struct {
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}


type ListDeploymentConfigsXAmzTargetEnum string

const (
    ListDeploymentConfigsXAmzTargetEnumCodeDeploy20141006ListDeploymentConfigs ListDeploymentConfigsXAmzTargetEnum = "CodeDeploy_20141006.ListDeploymentConfigs"
)


type ListDeploymentConfigsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListDeploymentConfigsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListDeploymentConfigsRequest struct {
    QueryParams ListDeploymentConfigsQueryParams 
    Headers ListDeploymentConfigsHeaders 
    Request shared.ListDeploymentConfigsInput `request:"mediaType=application/json"`
    
}

type ListDeploymentConfigsResponse struct {
    ContentType string 
    InvalidNextTokenException *interface{} 
    ListDeploymentConfigsOutput *shared.ListDeploymentConfigsOutput 
    StatusCode int64 
    
}

