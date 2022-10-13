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
	Destination     *string                                     `json:"destination"`
	DestinationType *shared.AssessmentReportDestinationTypeEnum `json:"destinationType"`
}

type UpdateSettingsRequestBody struct {
	DefaultAssessmentReportsDestination *UpdateSettingsRequestBodyDefaultAssessmentReportsDestination `json:"defaultAssessmentReportsDestination"`
	DefaultProcessOwners                []shared.Role                                                 `json:"defaultProcessOwners"`
	KmsKey                              *string                                                       `json:"kmsKey"`
	SnsTopic                            *string                                                       `json:"snsTopic"`
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
