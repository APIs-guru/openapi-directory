package operations

import (
	"openapi/pkg/models/shared"
)

type GetSuiteRunPathParams struct {
	SuiteDefinitionID string `pathParam:"style=simple,explode=false,name=suiteDefinitionId"`
	SuiteRunID        string `pathParam:"style=simple,explode=false,name=suiteRunId"`
}

type GetSuiteRunHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetSuiteRunRequest struct {
	PathParams GetSuiteRunPathParams
	Headers    GetSuiteRunHeaders
}

type GetSuiteRunResponse struct {
	ContentType               string
	GetSuiteRunResponse       *shared.GetSuiteRunResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
