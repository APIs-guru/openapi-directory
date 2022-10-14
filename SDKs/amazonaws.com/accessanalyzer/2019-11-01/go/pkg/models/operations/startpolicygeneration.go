package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type StartPolicyGenerationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type StartPolicyGenerationRequestBodyCloudTrailDetails struct {
	AccessRole *string        `json:"accessRole,omitempty"`
	EndTime    *time.Time     `json:"endTime,omitempty"`
	StartTime  *time.Time     `json:"startTime,omitempty"`
	Trails     []shared.Trail `json:"trails,omitempty"`
}

type StartPolicyGenerationRequestBodyPolicyGenerationDetails struct {
	PrincipalArn *string `json:"principalArn,omitempty"`
}

type StartPolicyGenerationRequestBody struct {
	ClientToken             *string                                                 `json:"clientToken,omitempty"`
	CloudTrailDetails       *StartPolicyGenerationRequestBodyCloudTrailDetails      `json:"cloudTrailDetails,omitempty"`
	PolicyGenerationDetails StartPolicyGenerationRequestBodyPolicyGenerationDetails `json:"policyGenerationDetails"`
}

type StartPolicyGenerationRequest struct {
	Headers StartPolicyGenerationHeaders
	Request StartPolicyGenerationRequestBody `request:"mediaType=application/json"`
}

type StartPolicyGenerationResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	InternalServerException       *interface{}
	ServiceQuotaExceededException *interface{}
	StartPolicyGenerationResponse *shared.StartPolicyGenerationResponse
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
