package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateLifecyclePolicyPathParams struct {
	PolicyID string `pathParam:"style=simple,explode=false,name=policyId"`
}

type UpdateLifecyclePolicyHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateLifecyclePolicyRequestBodyPolicyDetails struct {
	Actions           []shared.Action                     `json:"Actions,omitempty"`
	EventSource       *shared.EventSource                 `json:"EventSource,omitempty"`
	Parameters        *shared.Parameters                  `json:"Parameters,omitempty"`
	PolicyType        *shared.PolicyTypeValuesEnum        `json:"PolicyType,omitempty"`
	ResourceLocations []shared.ResourceLocationValuesEnum `json:"ResourceLocations,omitempty"`
	ResourceTypes     []shared.ResourceTypeValuesEnum     `json:"ResourceTypes,omitempty"`
	Schedules         []shared.Schedule                   `json:"Schedules,omitempty"`
	TargetTags        []shared.Tag                        `json:"TargetTags,omitempty"`
}

type UpdateLifecyclePolicyRequestBodyStateEnum string

const (
	UpdateLifecyclePolicyRequestBodyStateEnumEnabled  UpdateLifecyclePolicyRequestBodyStateEnum = "ENABLED"
	UpdateLifecyclePolicyRequestBodyStateEnumDisabled UpdateLifecyclePolicyRequestBodyStateEnum = "DISABLED"
)

type UpdateLifecyclePolicyRequestBody struct {
	Description      *string                                        `json:"Description,omitempty"`
	ExecutionRoleArn *string                                        `json:"ExecutionRoleArn,omitempty"`
	PolicyDetails    *UpdateLifecyclePolicyRequestBodyPolicyDetails `json:"PolicyDetails,omitempty"`
	State            *UpdateLifecyclePolicyRequestBodyStateEnum     `json:"State,omitempty"`
}

type UpdateLifecyclePolicyRequest struct {
	PathParams UpdateLifecyclePolicyPathParams
	Headers    UpdateLifecyclePolicyHeaders
	Request    UpdateLifecyclePolicyRequestBody `request:"mediaType=application/json"`
}

type UpdateLifecyclePolicyResponse struct {
	ContentType                   string
	InternalServerException       *interface{}
	InvalidRequestException       *interface{}
	LimitExceededException        *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	UpdateLifecyclePolicyResponse map[string]interface{}
}
