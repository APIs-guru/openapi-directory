package operations

import (
	"openapi/pkg/models/shared"
)

type GetComponentQueryParams struct {
	ComponentBuildVersionArn string `queryParam:"style=form,explode=true,name=componentBuildVersionArn"`
}

type GetComponentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetComponentRequest struct {
	QueryParams GetComponentQueryParams
	Headers     GetComponentHeaders
}

type GetComponentResponse struct {
	CallRateLimitExceededException *interface{}
	ClientException                *interface{}
	ContentType                    string
	ForbiddenException             *interface{}
	GetComponentResponse           *shared.GetComponentResponse
	InvalidRequestException        *interface{}
	ServiceException               *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
}
