package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteImageQueryParams struct {
	ImageBuildVersionArn string `queryParam:"style=form,explode=true,name=imageBuildVersionArn"`
}

type DeleteImageHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DeleteImageRequest struct {
	QueryParams DeleteImageQueryParams
	Headers     DeleteImageHeaders
}

type DeleteImageResponse struct {
	CallRateLimitExceededException *interface{}
	ClientException                *interface{}
	ContentType                    string
	DeleteImageResponse            *shared.DeleteImageResponse
	ForbiddenException             *interface{}
	InvalidRequestException        *interface{}
	ResourceDependencyException    *interface{}
	ServiceException               *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
}
