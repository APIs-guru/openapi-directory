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
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateSecurityProfileRequestBody struct {
	AdditionalMetricsToRetain       []string                      `json:"additionalMetricsToRetain"`
	AdditionalMetricsToRetainV2     []shared.MetricToRetain       `json:"additionalMetricsToRetainV2"`
	AlertTargets                    map[string]shared.AlertTarget `json:"alertTargets"`
	Behaviors                       []shared.Behavior             `json:"behaviors"`
	DeleteAdditionalMetricsToRetain *bool                         `json:"deleteAdditionalMetricsToRetain"`
	DeleteAlertTargets              *bool                         `json:"deleteAlertTargets"`
	DeleteBehaviors                 *bool                         `json:"deleteBehaviors"`
	SecurityProfileDescription      *string                       `json:"securityProfileDescription"`
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
