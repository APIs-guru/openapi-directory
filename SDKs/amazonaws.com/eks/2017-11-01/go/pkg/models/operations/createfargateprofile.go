package operations

import (
	"openapi/pkg/models/shared"
)

type CreateFargateProfilePathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type CreateFargateProfileHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateFargateProfileRequestBody struct {
	ClientRequestToken  *string                         `json:"clientRequestToken,omitempty"`
	FargateProfileName  string                          `json:"fargateProfileName"`
	PodExecutionRoleArn string                          `json:"podExecutionRoleArn"`
	Selectors           []shared.FargateProfileSelector `json:"selectors,omitempty"`
	Subnets             []string                        `json:"subnets,omitempty"`
	Tags                map[string]string               `json:"tags,omitempty"`
}

type CreateFargateProfileRequest struct {
	PathParams CreateFargateProfilePathParams
	Headers    CreateFargateProfileHeaders
	Request    CreateFargateProfileRequestBody `request:"mediaType=application/json"`
}

type CreateFargateProfileResponse struct {
	ClientException                      *interface{}
	ContentType                          string
	CreateFargateProfileResponse         *shared.CreateFargateProfileResponse
	InvalidParameterException            *interface{}
	InvalidRequestException              *interface{}
	ResourceLimitExceededException       *interface{}
	ServerException                      *interface{}
	StatusCode                           int64
	UnsupportedAvailabilityZoneException *interface{}
}
