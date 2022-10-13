package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePolicyPathParams struct {
	PolicyName string `pathParam:"style=simple,explode=false,name=policyName"`
}

type CreatePolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreatePolicyRequestBody struct {
	PolicyDocument string       `json:"policyDocument"`
	Tags           []shared.Tag `json:"tags"`
}

type CreatePolicyRequest struct {
	PathParams CreatePolicyPathParams
	Headers    CreatePolicyHeaders
	Request    CreatePolicyRequestBody `request:"mediaType=application/json"`
}

type CreatePolicyResponse struct {
	ContentType                    string
	CreatePolicyResponse           *shared.CreatePolicyResponse
	InternalFailureException       *interface{}
	InvalidRequestException        *interface{}
	MalformedPolicyException       *interface{}
	ResourceAlreadyExistsException *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
	UnauthorizedException          *interface{}
}
