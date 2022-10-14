package operations

import (
	"openapi/pkg/models/shared"
)

type StartSuiteRunPathParams struct {
	SuiteDefinitionID string `pathParam:"style=simple,explode=false,name=suiteDefinitionId"`
}

type StartSuiteRunHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type StartSuiteRunRequestBodySuiteRunConfiguration struct {
	PrimaryDevice    *shared.DeviceUnderTest `json:"primaryDevice,omitempty"`
	SelectedTestList []string                `json:"selectedTestList,omitempty"`
}

type StartSuiteRunRequestBody struct {
	SuiteDefinitionVersion *string                                        `json:"suiteDefinitionVersion,omitempty"`
	SuiteRunConfiguration  *StartSuiteRunRequestBodySuiteRunConfiguration `json:"suiteRunConfiguration,omitempty"`
	Tags                   map[string]string                              `json:"tags,omitempty"`
}

type StartSuiteRunRequest struct {
	PathParams StartSuiteRunPathParams
	Headers    StartSuiteRunHeaders
	Request    StartSuiteRunRequestBody `request:"mediaType=application/json"`
}

type StartSuiteRunResponse struct {
	ConflictException       *interface{}
	ContentType             string
	InternalServerException *interface{}
	StartSuiteRunResponse   *shared.StartSuiteRunResponse
	StatusCode              int64
	ValidationException     *interface{}
}
