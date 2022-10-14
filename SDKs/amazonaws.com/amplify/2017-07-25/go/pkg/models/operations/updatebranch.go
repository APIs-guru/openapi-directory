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
	BackendEnvironmentArn      *string                           `json:"backendEnvironmentArn,omitempty"`
	BasicAuthCredentials       *string                           `json:"basicAuthCredentials,omitempty"`
	BuildSpec                  *string                           `json:"buildSpec,omitempty"`
	Description                *string                           `json:"description,omitempty"`
	DisplayName                *string                           `json:"displayName,omitempty"`
	EnableAutoBuild            *bool                             `json:"enableAutoBuild,omitempty"`
	EnableBasicAuth            *bool                             `json:"enableBasicAuth,omitempty"`
	EnableNotification         *bool                             `json:"enableNotification,omitempty"`
	EnablePerformanceMode      *bool                             `json:"enablePerformanceMode,omitempty"`
	EnablePullRequestPreview   *bool                             `json:"enablePullRequestPreview,omitempty"`
	EnvironmentVariables       map[string]string                 `json:"environmentVariables,omitempty"`
	Framework                  *string                           `json:"framework,omitempty"`
	PullRequestEnvironmentName *string                           `json:"pullRequestEnvironmentName,omitempty"`
	Stage                      *UpdateBranchRequestBodyStageEnum `json:"stage,omitempty"`
	TTL                        *string                           `json:"ttl,omitempty"`
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
