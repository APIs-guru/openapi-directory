package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteReportXAmzTargetEnum string

const (
	DeleteReportXAmzTargetEnumCodeBuild20161006DeleteReport DeleteReportXAmzTargetEnum = "CodeBuild_20161006.DeleteReport"
)

type DeleteReportHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteReportXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteReportRequest struct {
	Headers DeleteReportHeaders
	Request shared.DeleteReportInput `request:"mediaType=application/json"`
}

type DeleteReportResponse struct {
	ContentType           string
	DeleteReportOutput    map[string]interface{}
	InvalidInputException *interface{}
	StatusCode            int64
}
