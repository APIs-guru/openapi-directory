package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSettingsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateSettingsRequestBodyDefaultAssessmentReportsDestination struct {
	Destination     *string                                     `json:"destination,omitempty"`
	DestinationType *shared.AssessmentReportDestinationTypeEnum `json:"destinationType,omitempty"`
}

type UpdateSettingsRequestBody struct {
	DefaultAssessmentReportsDestination *UpdateSettingsRequestBodyDefaultAssessmentReportsDestination `json:"defaultAssessmentReportsDestination,omitempty"`
	DefaultProcessOwners                []shared.Role                                                 `json:"defaultProcessOwners,omitempty"`
	KmsKey                              *string                                                       `json:"kmsKey,omitempty"`
	SnsTopic                            *string                                                       `json:"snsTopic,omitempty"`
}

type UpdateSettingsRequest struct {
	Headers UpdateSettingsHeaders
	Request UpdateSettingsRequestBody `request:"mediaType=application/json"`
}

type UpdateSettingsResponse struct {
	AccessDeniedException   *interface{}
	ContentType             string
	InternalServerException *interface{}
	StatusCode              int64
	UpdateSettingsResponse  *shared.UpdateSettingsResponse
	ValidationException     *interface{}
}
