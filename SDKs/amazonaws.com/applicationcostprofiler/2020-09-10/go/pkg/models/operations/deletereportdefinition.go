package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteReportDefinitionPathParams struct {
	ReportID string `pathParam:"style=simple,explode=false,name=reportId"`
}

type DeleteReportDefinitionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteReportDefinitionRequest struct {
	PathParams DeleteReportDefinitionPathParams
	Headers    DeleteReportDefinitionHeaders
}

type DeleteReportDefinitionResponse struct {
	AccessDeniedException        *interface{}
	ContentType                  string
	DeleteReportDefinitionResult *shared.DeleteReportDefinitionResult
	InternalServerException      *interface{}
	StatusCode                   int64
	ThrottlingException          *interface{}
	ValidationException          *interface{}
}
