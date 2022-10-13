package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAppHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateAppRequestBodyAutoBranchCreationConfig struct {
	BasicAuthCredentials       *string           `json:"basicAuthCredentials"`
	BuildSpec                  *string           `json:"buildSpec"`
	EnableAutoBuild            *bool             `json:"enableAutoBuild"`
	EnableBasicAuth            *bool             `json:"enableBasicAuth"`
	EnablePerformanceMode      *bool             `json:"enablePerformanceMode"`
	EnablePullRequestPreview   *bool             `json:"enablePullRequestPreview"`
	EnvironmentVariables       map[string]string `json:"environmentVariables"`
	Framework                  *string           `json:"framework"`
	PullRequestEnvironmentName *string           `json:"pullRequestEnvironmentName"`
	Stage                      *shared.StageEnum `json:"stage"`
}

type CreateAppRequestBodyPlatformEnum string

const (
	CreateAppRequestBodyPlatformEnumWeb CreateAppRequestBodyPlatformEnum = "WEB"
)

type CreateAppRequestBody struct {
	AccessToken                *string                                       `json:"accessToken"`
	AutoBranchCreationConfig   *CreateAppRequestBodyAutoBranchCreationConfig `json:"autoBranchCreationConfig"`
	AutoBranchCreationPatterns []string                                      `json:"autoBranchCreationPatterns"`
	BasicAuthCredentials       *string                                       `json:"basicAuthCredentials"`
	BuildSpec                  *string                                       `json:"buildSpec"`
	CustomHeaders              *string                                       `json:"customHeaders"`
	CustomRules                []shared.CustomRule                           `json:"customRules"`
	Description                *string                                       `json:"description"`
	EnableAutoBranchCreation   *bool                                         `json:"enableAutoBranchCreation"`
	EnableBasicAuth            *bool                                         `json:"enableBasicAuth"`
	EnableBranchAutoBuild      *bool                                         `json:"enableBranchAutoBuild"`
	EnableBranchAutoDeletion   *bool                                         `json:"enableBranchAutoDeletion"`
	EnvironmentVariables       map[string]string                             `json:"environmentVariables"`
	IamServiceRoleArn          *string                                       `json:"iamServiceRoleArn"`
	Name                       string                                        `json:"name"`
	OauthToken                 *string                                       `json:"oauthToken"`
	Platform                   *CreateAppRequestBodyPlatformEnum             `json:"platform"`
	Repository                 *string                                       `json:"repository"`
	Tags                       map[string]string                             `json:"tags"`
}

type CreateAppRequest struct {
	Headers CreateAppHeaders
	Request CreateAppRequestBody `request:"mediaType=application/json"`
}

type CreateAppResponse struct {
	BadRequestException              *interface{}
	ContentType                      string
	CreateAppResult                  *shared.CreateAppResult
	DependentServiceFailureException *interface{}
	InternalFailureException         *interface{}
	LimitExceededException           *interface{}
	StatusCode                       int64
	UnauthorizedException            *interface{}
}
