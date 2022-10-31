package operations

import (
	"openapi/pkg/models/shared"
)

type GetReportGroupTrendXAmzTargetEnum string

const (
	GetReportGroupTrendXAmzTargetEnumCodeBuild20161006GetReportGroupTrend GetReportGroupTrendXAmzTargetEnum = "CodeBuild_20161006.GetReportGroupTrend"
)

type GetReportGroupTrendHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetReportGroupTrendXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetReportGroupTrendRequest struct {
	Headers GetReportGroupTrendHeaders
	Request shared.GetReportGroupTrendInput `request:"mediaType=application/json"`
}

type GetReportGroupTrendResponse struct {
	ContentType               string
	GetReportGroupTrendOutput *shared.GetReportGroupTrendOutput
	InvalidInputException     *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
