package operations

import (
	"openapi/pkg/models/shared"
)

type CreateLifecyclePolicyHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// CreateLifecyclePolicyRequestBodyPolicyDetails
// Specifies the configuration of a lifecycle policy.
type CreateLifecyclePolicyRequestBodyPolicyDetails struct {
	Actions           []shared.Action                     `json:"Actions,omitempty"`
	EventSource       *shared.EventSource                 `json:"EventSource,omitempty"`
	Parameters        *shared.Parameters                  `json:"Parameters,omitempty"`
	PolicyType        *shared.PolicyTypeValuesEnum        `json:"PolicyType,omitempty"`
	ResourceLocations []shared.ResourceLocationValuesEnum `json:"ResourceLocations,omitempty"`
	ResourceTypes     []shared.ResourceTypeValuesEnum     `json:"ResourceTypes,omitempty"`
	Schedules         []shared.Schedule                   `json:"Schedules,omitempty"`
	TargetTags        []shared.Tag                        `json:"TargetTags,omitempty"`
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
	Tags             map[string]string                             `json:"Tags,omitempty"`
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
