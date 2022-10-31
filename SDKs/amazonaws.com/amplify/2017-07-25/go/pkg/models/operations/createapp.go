package operations

import (
"openapi/pkg/models/shared")

type CreateAppHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateAppRequestBodyAutoBranchCreationConfig struct {
    BasicAuthCredentials *string `json:"basicAuthCredentials,omitempty"`
    BuildSpec *string `json:"buildSpec,omitempty"`
    EnableAutoBuild *bool `json:"enableAutoBuild,omitempty"`
    EnableBasicAuth *bool `json:"enableBasicAuth,omitempty"`
    EnablePerformanceMode *bool `json:"enablePerformanceMode,omitempty"`
    EnablePullRequestPreview *bool `json:"enablePullRequestPreview,omitempty"`
    EnvironmentVariables map[string]string `json:"environmentVariables,omitempty"`
    Framework *string `json:"framework,omitempty"`
    PullRequestEnvironmentName *string `json:"pullRequestEnvironmentName,omitempty"`
    Stage *shared.StageEnum `json:"stage,omitempty"`
    
}


type CreateAppRequestBodyPlatformEnum string

const (
    CreateAppRequestBodyPlatformEnumWeb CreateAppRequestBodyPlatformEnum = "WEB"
)


type CreateAppRequestBody struct {
    AccessToken *string `json:"accessToken,omitempty"`
    AutoBranchCreationConfig *CreateAppRequestBodyAutoBranchCreationConfig `json:"autoBranchCreationConfig,omitempty"`
    AutoBranchCreationPatterns []string `json:"autoBranchCreationPatterns,omitempty"`
    BasicAuthCredentials *string `json:"basicAuthCredentials,omitempty"`
    BuildSpec *string `json:"buildSpec,omitempty"`
    CustomHeaders *string `json:"customHeaders,omitempty"`
    CustomRules []shared.CustomRule `json:"customRules,omitempty"`
    Description *string `json:"description,omitempty"`
    EnableAutoBranchCreation *bool `json:"enableAutoBranchCreation,omitempty"`
    EnableBasicAuth *bool `json:"enableBasicAuth,omitempty"`
    EnableBranchAutoBuild *bool `json:"enableBranchAutoBuild,omitempty"`
    EnableBranchAutoDeletion *bool `json:"enableBranchAutoDeletion,omitempty"`
    EnvironmentVariables map[string]string `json:"environmentVariables,omitempty"`
    IamServiceRoleArn *string `json:"iamServiceRoleArn,omitempty"`
    Name string `json:"name"`
    OauthToken *string `json:"oauthToken,omitempty"`
    Platform *CreateAppRequestBodyPlatformEnum `json:"platform,omitempty"`
    Repository *string `json:"repository,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    
}

type CreateAppRequest struct {
    Headers CreateAppHeaders 
    Request CreateAppRequestBody `request:"mediaType=application/json"`
    
}

type CreateAppResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    CreateAppResult *shared.CreateAppResult 
    DependentServiceFailureException *interface{} 
    InternalFailureException *interface{} 
    LimitExceededException *interface{} 
    StatusCode int64 
    UnauthorizedException *interface{} 
    
}

