package operations

import (
	"openapi/pkg/models/shared"
)

type GetImageRecipeQueryParams struct {
	ImageRecipeArn string `queryParam:"style=form,explode=true,name=imageRecipeArn"`
}

type GetImageRecipeHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetImageRecipeRequest struct {
	QueryParams GetImageRecipeQueryParams
	Headers     GetImageRecipeHeaders
}

type GetImageRecipeResponse struct {
	CallRateLimitExceededException *interface{}
	ClientException                *interface{}
	ContentType                    string
	ForbiddenException             *interface{}
	GetImageRecipeResponse         *shared.GetImageRecipeResponse
	InvalidRequestException        *interface{}
	ServiceException               *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
}
