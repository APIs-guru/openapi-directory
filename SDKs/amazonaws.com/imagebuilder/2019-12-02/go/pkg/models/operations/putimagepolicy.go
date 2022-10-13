package operations

import (
	"openapi/pkg/models/shared"
)

type PutImagePolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PutImagePolicyRequestBody struct {
	ImageArn string `json:"imageArn"`
	Policy   string `json:"policy"`
}

type PutImagePolicyRequest struct {
	Headers PutImagePolicyHeaders
	Request PutImagePolicyRequestBody `request:"mediaType=application/json"`
}

type PutImagePolicyResponse struct {
	CallRateLimitExceededException *interface{}
	ClientException                *interface{}
	ContentType                    string
	ForbiddenException             *interface{}
	InvalidParameterValueException *interface{}
	InvalidRequestException        *interface{}
	PutImagePolicyResponse         *shared.PutImagePolicyResponse
	ResourceNotFoundException      *interface{}
	ServiceException               *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
}
