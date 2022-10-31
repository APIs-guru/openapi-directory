package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteReportDefinitionPathParams struct {
	ReportID string `pathParam:"style=simple,explode=false,name=reportId"`
}

type DeleteReportDefinitionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
