package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSuiteDefinitionPathParams struct {
	SuiteDefinitionID string `pathParam:"style=simple,explode=false,name=suiteDefinitionId"`
}

type UpdateSuiteDefinitionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration struct {
	DevicePermissionRoleArn  *string                  `json:"devicePermissionRoleArn"`
	Devices                  []shared.DeviceUnderTest `json:"devices"`
	IntendedForQualification *bool                    `json:"intendedForQualification"`
	RootGroup                *string                  `json:"rootGroup"`
	SuiteDefinitionName      *string                  `json:"suiteDefinitionName"`
}

type UpdateSuiteDefinitionRequestBody struct {
	SuiteDefinitionConfiguration *UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration `json:"suiteDefinitionConfiguration"`
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
