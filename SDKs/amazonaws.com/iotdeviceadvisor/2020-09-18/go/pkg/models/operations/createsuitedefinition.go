package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSuiteDefinitionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateSuiteDefinitionRequestBodySuiteDefinitionConfiguration struct {
	DevicePermissionRoleArn  *string                  `json:"devicePermissionRoleArn"`
	Devices                  []shared.DeviceUnderTest `json:"devices"`
	IntendedForQualification *bool                    `json:"intendedForQualification"`
	RootGroup                *string                  `json:"rootGroup"`
	SuiteDefinitionName      *string                  `json:"suiteDefinitionName"`
}

type CreateSuiteDefinitionRequestBody struct {
	SuiteDefinitionConfiguration *CreateSuiteDefinitionRequestBodySuiteDefinitionConfiguration `json:"suiteDefinitionConfiguration"`
	Tags                         map[string]string                                             `json:"tags"`
}

type CreateSuiteDefinitionRequest struct {
	Headers CreateSuiteDefinitionHeaders
	Request CreateSuiteDefinitionRequestBody `request:"mediaType=application/json"`
}

type CreateSuiteDefinitionResponse struct {
	ContentType                   string
	CreateSuiteDefinitionResponse *shared.CreateSuiteDefinitionResponse
	InternalServerException       *interface{}
	StatusCode                    int64
	ValidationException           *interface{}
}
