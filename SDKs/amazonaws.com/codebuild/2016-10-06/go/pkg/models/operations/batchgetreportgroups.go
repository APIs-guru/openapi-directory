package operations

import (
	"openapi/pkg/models/shared"
)

type BatchGetReportGroupsXAmzTargetEnum string

const (
	BatchGetReportGroupsXAmzTargetEnumCodeBuild20161006BatchGetReportGroups BatchGetReportGroupsXAmzTargetEnum = "CodeBuild_20161006.BatchGetReportGroups"
)

type BatchGetReportGroupsHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchGetReportGroupsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type BatchGetReportGroupsRequest struct {
	Headers BatchGetReportGroupsHeaders
	Request shared.BatchGetReportGroupsInput `request:"mediaType=application/json"`
}

type BatchGetReportGroupsResponse struct {
	BatchGetReportGroupsOutput *shared.BatchGetReportGroupsOutput
	ContentType                string
	InvalidInputException      *interface{}
	StatusCode                 int64
}
