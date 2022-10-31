package operations

import (
	"openapi/pkg/models/shared"
)

type GetContainerRecipePolicyQueryParams struct {
	ContainerRecipeArn string `queryParam:"style=form,explode=true,name=containerRecipeArn"`
}

type GetContainerRecipePolicyHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
