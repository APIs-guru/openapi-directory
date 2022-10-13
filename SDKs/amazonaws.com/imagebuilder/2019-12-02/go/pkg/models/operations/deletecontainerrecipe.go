package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteContainerRecipeQueryParams struct {
	ContainerRecipeArn string `queryParam:"style=form,explode=true,name=containerRecipeArn"`
}

type DeleteContainerRecipeHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteContainerRecipeRequest struct {
	QueryParams DeleteContainerRecipeQueryParams
	Headers     DeleteContainerRecipeHeaders
}

type DeleteContainerRecipeResponse struct {
	CallRateLimitExceededException *interface{}
	ClientException                *interface{}
	ContentType                    string
	DeleteContainerRecipeResponse  *shared.DeleteContainerRecipeResponse
	ForbiddenException             *interface{}
	InvalidRequestException        *interface{}
	ResourceDependencyException    *interface{}
	ServiceException               *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
}
