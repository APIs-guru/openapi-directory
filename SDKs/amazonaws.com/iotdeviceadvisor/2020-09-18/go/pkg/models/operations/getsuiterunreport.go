package operations

import (
	"openapi/pkg/models/shared"
)

type GetSuiteRunReportPathParams struct {
	SuiteDefinitionID string `pathParam:"style=simple,explode=false,name=suiteDefinitionId"`
	SuiteRunID        string `pathParam:"style=simple,explode=false,name=suiteRunId"`
}

type GetSuiteRunReportHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
