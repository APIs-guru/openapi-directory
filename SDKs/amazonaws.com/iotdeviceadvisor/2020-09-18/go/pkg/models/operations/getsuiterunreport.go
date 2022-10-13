package operations

import (
	"openapi/pkg/models/shared"
)

type GetSuiteRunReportPathParams struct {
	SuiteDefinitionID string `pathParam:"style=simple,explode=false,name=suiteDefinitionId"`
	SuiteRunID        string `pathParam:"style=simple,explode=false,name=suiteRunId"`
}

type GetSuiteRunReportHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetSuiteRunReportRequest struct {
	PathParams GetSuiteRunReportPathParams
	Headers    GetSuiteRunReportHeaders
}

type GetSuiteRunReportResponse struct {
	ContentType               string
	GetSuiteRunReportResponse *shared.GetSuiteRunReportResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
