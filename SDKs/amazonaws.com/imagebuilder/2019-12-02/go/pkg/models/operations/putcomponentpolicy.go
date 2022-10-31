package operations

import (
	"openapi/pkg/models/shared"
)

type PutComponentPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PutComponentPolicyRequestBody struct {
	ComponentArn string `json:"componentArn"`
	Policy       string `json:"policy"`
}

type PutComponentPolicyRequest struct {
	Headers PutComponentPolicyHeaders
	Request PutComponentPolicyRequestBody `request:"mediaType=application/json"`
}

type PutComponentPolicyResponse struct {
	CallRateLimitExceededException *interface{}
	ClientException                *interface{}
	ContentType                    string
	ForbiddenException             *interface{}
	InvalidParameterValueException *interface{}
	InvalidRequestException        *interface{}
	PutComponentPolicyResponse     *shared.PutComponentPolicyResponse
	ResourceNotFoundException      *interface{}
	ServiceException               *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
}
