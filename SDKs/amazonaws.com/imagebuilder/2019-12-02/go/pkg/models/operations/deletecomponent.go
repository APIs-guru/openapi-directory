package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteComponentQueryParams struct {
	ComponentBuildVersionArn string `queryParam:"style=form,explode=true,name=componentBuildVersionArn"`
}

type DeleteComponentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteComponentRequest struct {
	QueryParams DeleteComponentQueryParams
	Headers     DeleteComponentHeaders
}

type DeleteComponentResponse struct {
	CallRateLimitExceededException *interface{}
	ClientException                *interface{}
	ContentType                    string
	DeleteComponentResponse        *shared.DeleteComponentResponse
	ForbiddenException             *interface{}
	InvalidRequestException        *interface{}
	ResourceDependencyException    *interface{}
	ServiceException               *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
}
