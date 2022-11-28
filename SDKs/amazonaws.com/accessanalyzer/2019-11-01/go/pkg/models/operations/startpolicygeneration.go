package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type StartPolicyGenerationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// StartPolicyGenerationRequestBodyCloudTrailDetails
// Contains information about CloudTrail access.
type StartPolicyGenerationRequestBodyCloudTrailDetails struct {
	AccessRole *string        `json:"accessRole,omitempty"`
	EndTime    *time.Time     `json:"endTime,omitempty"`
	StartTime  *time.Time     `json:"startTime,omitempty"`
	Trails     []shared.Trail `json:"trails,omitempty"`
}

// StartPolicyGenerationRequestBodyPolicyGenerationDetails
// Contains the ARN details about the IAM entity for which the policy is generated.
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
