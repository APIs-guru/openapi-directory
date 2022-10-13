package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateLifecyclePolicyPathParams struct {
	PolicyID string `pathParam:"style=simple,explode=false,name=policyId"`
}

type UpdateLifecyclePolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateLifecyclePolicyRequestBodyPolicyDetails struct {
	Actions           []shared.Action                     `json:"Actions"`
	EventSource       *shared.EventSource                 `json:"EventSource"`
	Parameters        *shared.Parameters                  `json:"Parameters"`
	PolicyType        *shared.PolicyTypeValuesEnum        `json:"PolicyType"`
	ResourceLocations []shared.ResourceLocationValuesEnum `json:"ResourceLocations"`
	ResourceTypes     []shared.ResourceTypeValuesEnum     `json:"ResourceTypes"`
	Schedules         []shared.Schedule                   `json:"Schedules"`
	TargetTags        []shared.Tag                        `json:"TargetTags"`
}

type UpdateLifecyclePolicyRequestBodyStateEnum string

const (
	UpdateLifecyclePolicyRequestBodyStateEnumEnabled  UpdateLifecyclePolicyRequestBodyStateEnum = "ENABLED"
	UpdateLifecyclePolicyRequestBodyStateEnumDisabled UpdateLifecyclePolicyRequestBodyStateEnum = "DISABLED"
)

type UpdateLifecyclePolicyRequestBody struct {
	Description      *string                                        `json:"Description"`
	ExecutionRoleArn *string                                        `json:"ExecutionRoleArn"`
	PolicyDetails    *UpdateLifecyclePolicyRequestBodyPolicyDetails `json:"PolicyDetails"`
	State            *UpdateLifecyclePolicyRequestBodyStateEnum     `json:"State"`
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
