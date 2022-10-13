package operations

import (
	"openapi/pkg/models/shared"
)

type CreateLifecyclePolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateLifecyclePolicyRequestBodyPolicyDetails struct {
	Actions           []shared.Action                     `json:"Actions"`
	EventSource       *shared.EventSource                 `json:"EventSource"`
	Parameters        *shared.Parameters                  `json:"Parameters"`
	PolicyType        *shared.PolicyTypeValuesEnum        `json:"PolicyType"`
	ResourceLocations []shared.ResourceLocationValuesEnum `json:"ResourceLocations"`
	ResourceTypes     []shared.ResourceTypeValuesEnum     `json:"ResourceTypes"`
	Schedules         []shared.Schedule                   `json:"Schedules"`
	TargetTags        []shared.Tag                        `json:"TargetTags"`
}

type CreateLifecyclePolicyRequestBodyStateEnum string

const (
	CreateLifecyclePolicyRequestBodyStateEnumEnabled  CreateLifecyclePolicyRequestBodyStateEnum = "ENABLED"
	CreateLifecyclePolicyRequestBodyStateEnumDisabled CreateLifecyclePolicyRequestBodyStateEnum = "DISABLED"
)

type CreateLifecyclePolicyRequestBody struct {
	Description      string                                        `json:"Description"`
	ExecutionRoleArn string                                        `json:"ExecutionRoleArn"`
	PolicyDetails    CreateLifecyclePolicyRequestBodyPolicyDetails `json:"PolicyDetails"`
	State            CreateLifecyclePolicyRequestBodyStateEnum     `json:"State"`
	Tags             map[string]string                             `json:"Tags"`
}

type CreateLifecyclePolicyRequest struct {
	Headers CreateLifecyclePolicyHeaders
	Request CreateLifecyclePolicyRequestBody `request:"mediaType=application/json"`
}

type CreateLifecyclePolicyResponse struct {
	ContentType                   string
	CreateLifecyclePolicyResponse *shared.CreateLifecyclePolicyResponse
	InternalServerException       *interface{}
	InvalidRequestException       *interface{}
	LimitExceededException        *interface{}
	StatusCode                    int64
}
