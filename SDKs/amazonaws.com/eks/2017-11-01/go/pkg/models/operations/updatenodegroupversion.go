package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateNodegroupVersionPathParams struct {
	Name          string `pathParam:"style=simple,explode=false,name=name"`
	NodegroupName string `pathParam:"style=simple,explode=false,name=nodegroupName"`
}

type UpdateNodegroupVersionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateNodegroupVersionRequestBodyLaunchTemplate struct {
	ID      *string `json:"id"`
	Name    *string `json:"name"`
	Version *string `json:"version"`
}

type UpdateNodegroupVersionRequestBody struct {
	ClientRequestToken *string                                          `json:"clientRequestToken"`
	Force              *bool                                            `json:"force"`
	LaunchTemplate     *UpdateNodegroupVersionRequestBodyLaunchTemplate `json:"launchTemplate"`
	ReleaseVersion     *string                                          `json:"releaseVersion"`
	Version            *string                                          `json:"version"`
}

type UpdateNodegroupVersionRequest struct {
	PathParams UpdateNodegroupVersionPathParams
	Headers    UpdateNodegroupVersionHeaders
	Request    UpdateNodegroupVersionRequestBody `request:"mediaType=application/json"`
}

type UpdateNodegroupVersionResponse struct {
	ClientException                *interface{}
	ContentType                    string
	InvalidParameterException      *interface{}
	InvalidRequestException        *interface{}
	ResourceInUseException         *interface{}
	ResourceNotFoundException      *interface{}
	ServerException                *interface{}
	StatusCode                     int64
	UpdateNodegroupVersionResponse *shared.UpdateNodegroupVersionResponse
}
