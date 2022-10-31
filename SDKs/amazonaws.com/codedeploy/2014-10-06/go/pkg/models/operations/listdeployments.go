package operations

import (
"openapi/pkg/models/shared")

type ListDeploymentsQueryParams struct {
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}


type ListDeploymentsXAmzTargetEnum string

const (
    ListDeploymentsXAmzTargetEnumCodeDeploy20141006ListDeployments ListDeploymentsXAmzTargetEnum = "CodeDeploy_20141006.ListDeployments"
)


type ListDeploymentsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListDeploymentsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListDeploymentsRequest struct {
    QueryParams ListDeploymentsQueryParams 
    Headers ListDeploymentsHeaders 
    Request shared.ListDeploymentsInput `request:"mediaType=application/json"`
    
}

type ListDeploymentsResponse struct {
    ApplicationDoesNotExistException *interface{} 
    ApplicationNameRequiredException *interface{} 
    ContentType string 
    DeploymentGroupDoesNotExistException *interface{} 
    DeploymentGroupNameRequiredException *interface{} 
    InvalidApplicationNameException *interface{} 
    InvalidDeploymentGroupNameException *interface{} 
    InvalidDeploymentStatusException *interface{} 
    InvalidExternalIDException *interface{} 
    InvalidInputException *interface{} 
    InvalidNextTokenException *interface{} 
    InvalidTimeRangeException *interface{} 
    ListDeploymentsOutput *shared.ListDeploymentsOutput 
    StatusCode int64 
    
}

