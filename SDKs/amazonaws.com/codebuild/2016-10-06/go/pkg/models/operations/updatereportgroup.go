package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateReportGroupXAmzTargetEnum string

const (
	UpdateReportGroupXAmzTargetEnumCodeBuild20161006UpdateReportGroup UpdateReportGroupXAmzTargetEnum = "CodeBuild_20161006.UpdateReportGroup"
)

type UpdateReportGroupHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateReportGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateReportGroupRequest struct {
	Headers UpdateReportGroupHeaders
	Request shared.UpdateReportGroupInput `request:"mediaType=application/json"`
}

type UpdateReportGroupResponse struct {
	ContentType               string
	InvalidInputException     *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	UpdateReportGroupOutput   *shared.UpdateReportGroupOutput
}
