package operations

import (
"openapi/pkg/models/shared")

type CreateBranchPathParams struct {
    AppID string `pathParam:"style=simple,explode=false,name=appId"`
    
}

type CreateBranchHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}


type CreateBranchRequestBodyStageEnum string

const (
    CreateBranchRequestBodyStageEnumProduction CreateBranchRequestBodyStageEnum = "PRODUCTION"
CreateBranchRequestBodyStageEnumBeta CreateBranchRequestBodyStageEnum = "BETA"
CreateBranchRequestBodyStageEnumDevelopment CreateBranchRequestBodyStageEnum = "DEVELOPMENT"
CreateBranchRequestBodyStageEnumExperimental CreateBranchRequestBodyStageEnum = "EXPERIMENTAL"
CreateBranchRequestBodyStageEnumPullRequest CreateBranchRequestBodyStageEnum = "PULL_REQUEST"
)


type CreateBranchRequestBody struct {
    BackendEnvironmentArn *string `json:"backendEnvironmentArn,omitempty"`
    BasicAuthCredentials *string `json:"basicAuthCredentials,omitempty"`
    BranchName string `json:"branchName"`
    BuildSpec *string `json:"buildSpec,omitempty"`
    Description *string `json:"description,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    EnableAutoBuild *bool `json:"enableAutoBuild,omitempty"`
    EnableBasicAuth *bool `json:"enableBasicAuth,omitempty"`
    EnableNotification *bool `json:"enableNotification,omitempty"`
    EnablePerformanceMode *bool `json:"enablePerformanceMode,omitempty"`
    EnablePullRequestPreview *bool `json:"enablePullRequestPreview,omitempty"`
    EnvironmentVariables map[string]string `json:"environmentVariables,omitempty"`
    Framework *string `json:"framework,omitempty"`
    PullRequestEnvironmentName *string `json:"pullRequestEnvironmentName,omitempty"`
    Stage *CreateBranchRequestBodyStageEnum `json:"stage,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    TTL *string `json:"ttl,omitempty"`
    
}

type CreateBranchRequest struct {
    PathParams CreateBranchPathParams 
    Headers CreateBranchHeaders 
    Request CreateBranchRequestBody `request:"mediaType=application/json"`
    
}

type CreateBranchResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    CreateBranchResult *shared.CreateBranchResult 
    DependentServiceFailureException *interface{} 
    InternalFailureException *interface{} 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    UnauthorizedException *interface{} 
    
}

