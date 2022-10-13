package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateBranchPathParams struct {
	AppID      string `pathParam:"style=simple,explode=false,name=appId"`
	BranchName string `pathParam:"style=simple,explode=false,name=branchName"`
}

type UpdateBranchHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateBranchRequestBodyStageEnum string

const (
	UpdateBranchRequestBodyStageEnumProduction   UpdateBranchRequestBodyStageEnum = "PRODUCTION"
	UpdateBranchRequestBodyStageEnumBeta         UpdateBranchRequestBodyStageEnum = "BETA"
	UpdateBranchRequestBodyStageEnumDevelopment  UpdateBranchRequestBodyStageEnum = "DEVELOPMENT"
	UpdateBranchRequestBodyStageEnumExperimental UpdateBranchRequestBodyStageEnum = "EXPERIMENTAL"
	UpdateBranchRequestBodyStageEnumPullRequest  UpdateBranchRequestBodyStageEnum = "PULL_REQUEST"
)

type UpdateBranchRequestBody struct {
	BackendEnvironmentArn      *string                           `json:"backendEnvironmentArn"`
	BasicAuthCredentials       *string                           `json:"basicAuthCredentials"`
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
	Stage                      *UpdateBranchRequestBodyStageEnum `json:"stage"`
	TTL                        *string                           `json:"ttl"`
}

type UpdateBranchRequest struct {
	PathParams UpdateBranchPathParams
	Headers    UpdateBranchHeaders
	Request    UpdateBranchRequestBody `request:"mediaType=application/json"`
}

type UpdateBranchResponse struct {
	BadRequestException              *interface{}
	ContentType                      string
	DependentServiceFailureException *interface{}
	InternalFailureException         *interface{}
	NotFoundException                *interface{}
	StatusCode                       int64
	UnauthorizedException            *interface{}
	UpdateBranchResult               *shared.UpdateBranchResult
}
