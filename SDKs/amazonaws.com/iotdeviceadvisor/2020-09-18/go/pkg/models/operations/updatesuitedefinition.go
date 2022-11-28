package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSuiteDefinitionPathParams struct {
	SuiteDefinitionID string `pathParam:"style=simple,explode=false,name=suiteDefinitionId"`
}

type UpdateSuiteDefinitionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration
// Gets Suite Definition Configuration.
type UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration struct {
	DevicePermissionRoleArn  *string                  `json:"devicePermissionRoleArn,omitempty"`
	Devices                  []shared.DeviceUnderTest `json:"devices,omitempty"`
	IntendedForQualification *bool                    `json:"intendedForQualification,omitempty"`
	RootGroup                *string                  `json:"rootGroup,omitempty"`
	SuiteDefinitionName      *string                  `json:"suiteDefinitionName,omitempty"`
}

type UpdateSuiteDefinitionRequestBody struct {
	SuiteDefinitionConfiguration *UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration `json:"suiteDefinitionConfiguration,omitempty"`
}

type UpdateSuiteDefinitionRequest struct {
	PathParams UpdateSuiteDefinitionPathParams
	Headers    UpdateSuiteDefinitionHeaders
	Request    UpdateSuiteDefinitionRequestBody `request:"mediaType=application/json"`
}

type UpdateSuiteDefinitionResponse struct {
	ContentType                   string
	InternalServerException       *interface{}
	StatusCode                    int64
	UpdateSuiteDefinitionResponse *shared.UpdateSuiteDefinitionResponse
	ValidationException           *interface{}
}
