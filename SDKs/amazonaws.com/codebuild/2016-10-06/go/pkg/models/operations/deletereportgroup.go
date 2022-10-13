package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteReportGroupXAmzTargetEnum string

const (
	DeleteReportGroupXAmzTargetEnumCodeBuild20161006DeleteReportGroup DeleteReportGroupXAmzTargetEnum = "CodeBuild_20161006.DeleteReportGroup"
)

type DeleteReportGroupHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteReportGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteReportGroupRequest struct {
	Headers DeleteReportGroupHeaders
	Request shared.DeleteReportGroupInput `request:"mediaType=application/json"`
}

type DeleteReportGroupResponse struct {
	ContentType             string
	DeleteReportGroupOutput map[string]interface{}
	InvalidInputException   *interface{}
	StatusCode              int64
}
