package operations

import (
	"openapi/pkg/models/shared"
)

type StartSuiteRunPathParams struct {
	SuiteDefinitionID string `pathParam:"style=simple,explode=false,name=suiteDefinitionId"`
}

type StartSuiteRunHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// StartSuiteRunRequestBodySuiteRunConfiguration
// Gets suite run configuration.
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
