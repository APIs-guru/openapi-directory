package operations

import (
	"openapi/pkg/models/shared"
)

type GetReportGroupTrendXAmzTargetEnum string

const (
	GetReportGroupTrendXAmzTargetEnumCodeBuild20161006GetReportGroupTrend GetReportGroupTrendXAmzTargetEnum = "CodeBuild_20161006.GetReportGroupTrend"
)

type GetReportGroupTrendHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetReportGroupTrendXAmzTargetEnum `header:"name=X-Amz-Target"`
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
