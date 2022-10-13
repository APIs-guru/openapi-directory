package operations

import (
	"openapi/pkg/models/shared"
)

type GetImagePipelineQueryParams struct {
	ImagePipelineArn string `queryParam:"style=form,explode=true,name=imagePipelineArn"`
}

type GetImagePipelineHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetImagePipelineRequest struct {
	QueryParams GetImagePipelineQueryParams
	Headers     GetImagePipelineHeaders
}

type GetImagePipelineResponse struct {
	CallRateLimitExceededException *interface{}
	ClientException                *interface{}
	ContentType                    string
	ForbiddenException             *interface{}
	GetImagePipelineResponse       *shared.GetImagePipelineResponse
	InvalidRequestException        *interface{}
	ServiceException               *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
}
