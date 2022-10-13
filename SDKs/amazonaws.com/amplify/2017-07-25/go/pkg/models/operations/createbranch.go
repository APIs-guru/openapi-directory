package operations

import (
	"openapi/pkg/models/shared"
)

type CreateBranchPathParams struct {
	AppID string `pathParam:"style=simple,explode=false,name=appId"`
}

type CreateBranchHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateBranchRequestBodyStageEnum string

const (
	CreateBranchRequestBodyStageEnumProduction   CreateBranchRequestBodyStageEnum = "PRODUCTION"
	CreateBranchRequestBodyStageEnumBeta         CreateBranchRequestBodyStageEnum = "BETA"
	CreateBranchRequestBodyStageEnumDevelopment  CreateBranchRequestBodyStageEnum = "DEVELOPMENT"
	CreateBranchRequestBodyStageEnumExperimental CreateBranchRequestBodyStageEnum = "EXPERIMENTAL"
	CreateBranchRequestBodyStageEnumPullRequest  CreateBranchRequestBodyStageEnum = "PULL_REQUEST"
)

type CreateBranchRequestBody struct {
	BackendEnvironmentArn      *string                           `json:"backendEnvironmentArn"`
	BasicAuthCredentials       *string                           `json:"basicAuthCredentials"`
	BranchName                 string                            `json:"branchName"`
	BuildSpec                  *string                           `json:"buildSpec"`
	Description                *string                           `json:"description"`
	DisplayName                *string                           `json:"displayName"`
	EnableAutoBuild            *bool                             `json:"enableAutoBuild"`
	EnableBasicAuth            *bool                             `json:"enableBasicAuth"`
	EnableNotification         *bool                             `json:"enableNotification"`
	EnablePerformanceMode      *bool                             `json:"enablePerformanceMode"`
	EnablePullRequestPreview   *bool                             `json:"enablePullRequestPreview"`
	EnvironmentVariables       map[string]string                 `json:"environmentVariables"`
	Framework                  *string                           `json:"framework"`
	PullRequestEnvironmentName *string                           `json:"pullRequestEnvironmentName"`
	Stage                      *CreateBranchRequestBodyStageEnum `json:"stage"`
	Tags                       map[string]string                 `json:"tags"`
	TTL                        *string                           `json:"ttl"`
}

type CreateBranchRequest struct {
	PathParams CreateBranchPathParams
	Headers    CreateBranchHeaders
	Request    CreateBranchRequestBody `request:"mediaType=application/json"`
}

type CreateBranchResponse struct {
	BadRequestException              *interface{}
	ContentType                      string
	CreateBranchResult               *shared.CreateBranchResult
	DependentServiceFailureException *interface{}
	InternalFailureException         *interface{}
	LimitExceededException           *interface{}
	NotFoundException                *interface{}
	StatusCode                       int64
	UnauthorizedException            *interface{}
}
