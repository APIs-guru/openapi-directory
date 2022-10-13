package operations

import (
	"openapi/pkg/models/shared"
)

type GetContainerRecipePolicyQueryParams struct {
	ContainerRecipeArn string `queryParam:"style=form,explode=true,name=containerRecipeArn"`
}

type GetContainerRecipePolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetContainerRecipePolicyRequest struct {
	QueryParams GetContainerRecipePolicyQueryParams
	Headers     GetContainerRecipePolicyHeaders
}

type GetContainerRecipePolicyResponse struct {
	CallRateLimitExceededException   *interface{}
	ContentType                      string
	ForbiddenException               *interface{}
	GetContainerRecipePolicyResponse *shared.GetContainerRecipePolicyResponse
	InvalidRequestException          *interface{}
	ResourceNotFoundException        *interface{}
	ServiceException                 *interface{}
	ServiceUnavailableException      *interface{}
	StatusCode                       int64
}
