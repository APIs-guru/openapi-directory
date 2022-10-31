package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSecurityProfilePathParams struct {
	SecurityProfileName string `pathParam:"style=simple,explode=false,name=securityProfileName"`
}

type UpdateSecurityProfileQueryParams struct {
	ExpectedVersion *int64 `queryParam:"style=form,explode=true,name=expectedVersion"`
}

type UpdateSecurityProfileHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateSecurityProfileRequestBody struct {
	AdditionalMetricsToRetain       []string                      `json:"additionalMetricsToRetain,omitempty"`
	AdditionalMetricsToRetainV2     []shared.MetricToRetain       `json:"additionalMetricsToRetainV2,omitempty"`
	AlertTargets                    map[string]shared.AlertTarget `json:"alertTargets,omitempty"`
	Behaviors                       []shared.Behavior             `json:"behaviors,omitempty"`
	DeleteAdditionalMetricsToRetain *bool                         `json:"deleteAdditionalMetricsToRetain,omitempty"`
	DeleteAlertTargets              *bool                         `json:"deleteAlertTargets,omitempty"`
	DeleteBehaviors                 *bool                         `json:"deleteBehaviors,omitempty"`
	SecurityProfileDescription      *string                       `json:"securityProfileDescription,omitempty"`
}

type UpdateSecurityProfileRequest struct {
	PathParams  UpdateSecurityProfilePathParams
	QueryParams UpdateSecurityProfileQueryParams
	Headers     UpdateSecurityProfileHeaders
	Request     UpdateSecurityProfileRequestBody `request:"mediaType=application/json"`
}

type UpdateSecurityProfileResponse struct {
	ContentType                   string
	InternalFailureException      *interface{}
	InvalidRequestException       *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	UpdateSecurityProfileResponse *shared.UpdateSecurityProfileResponse
	VersionConflictException      *interface{}
}
