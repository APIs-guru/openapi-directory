package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSecurityProfilePathParams struct {
	SecurityProfileName string `pathParam:"style=simple,explode=false,name=securityProfileName"`
}

type CreateSecurityProfileHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateSecurityProfileRequestBody struct {
	AdditionalMetricsToRetain   []string                      `json:"additionalMetricsToRetain"`
	AdditionalMetricsToRetainV2 []shared.MetricToRetain       `json:"additionalMetricsToRetainV2"`
	AlertTargets                map[string]shared.AlertTarget `json:"alertTargets"`
	Behaviors                   []shared.Behavior             `json:"behaviors"`
	SecurityProfileDescription  *string                       `json:"securityProfileDescription"`
	Tags                        []shared.Tag                  `json:"tags"`
}

type CreateSecurityProfileRequest struct {
	PathParams CreateSecurityProfilePathParams
	Headers    CreateSecurityProfileHeaders
	Request    CreateSecurityProfileRequestBody `request:"mediaType=application/json"`
}

type CreateSecurityProfileResponse struct {
	ContentType                    string
	CreateSecurityProfileResponse  *shared.CreateSecurityProfileResponse
	InternalFailureException       *interface{}
	InvalidRequestException        *interface{}
	ResourceAlreadyExistsException *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
}
