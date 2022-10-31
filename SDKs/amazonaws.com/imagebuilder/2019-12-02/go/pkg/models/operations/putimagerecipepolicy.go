package operations

import (
	"openapi/pkg/models/shared"
)

type PutImageRecipePolicyHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PutImageRecipePolicyRequestBody struct {
	ImageRecipeArn string `json:"imageRecipeArn"`
	Policy         string `json:"policy"`
}

type PutImageRecipePolicyRequest struct {
	Headers PutImageRecipePolicyHeaders
	Request PutImageRecipePolicyRequestBody `request:"mediaType=application/json"`
}

type PutImageRecipePolicyResponse struct {
	CallRateLimitExceededException *interface{}
	ClientException                *interface{}
	ContentType                    string
	ForbiddenException             *interface{}
	InvalidParameterValueException *interface{}
	InvalidRequestException        *interface{}
	PutImageRecipePolicyResponse   *shared.PutImageRecipePolicyResponse
	ResourceNotFoundException      *interface{}
	ServiceException               *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
}
