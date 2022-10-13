package operations

import (
	"openapi/pkg/models/shared"
)

type PutContainerRecipePolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PutContainerRecipePolicyRequestBody struct {
	ContainerRecipeArn string `json:"containerRecipeArn"`
	Policy             string `json:"policy"`
}

type PutContainerRecipePolicyRequest struct {
	Headers PutContainerRecipePolicyHeaders
	Request PutContainerRecipePolicyRequestBody `request:"mediaType=application/json"`
}

type PutContainerRecipePolicyResponse struct {
	CallRateLimitExceededException   *interface{}
	ClientException                  *interface{}
	ContentType                      string
	ForbiddenException               *interface{}
	InvalidParameterValueException   *interface{}
	InvalidRequestException          *interface{}
	PutContainerRecipePolicyResponse *shared.PutContainerRecipePolicyResponse
	ResourceNotFoundException        *interface{}
	ServiceException                 *interface{}
	ServiceUnavailableException      *interface{}
	StatusCode                       int64
}
