package operations

import (
	"openapi/pkg/models/shared"
)

type GetImageQueryParams struct {
	ImageBuildVersionArn string `queryParam:"style=form,explode=true,name=imageBuildVersionArn"`
}

type GetImageHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetImageRequest struct {
	QueryParams GetImageQueryParams
	Headers     GetImageHeaders
}

type GetImageResponse struct {
	CallRateLimitExceededException *interface{}
	ClientException                *interface{}
	ContentType                    string
	ForbiddenException             *interface{}
	GetImageResponse               *shared.GetImageResponse
	InvalidRequestException        *interface{}
	ServiceException               *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
}
