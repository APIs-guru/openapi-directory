package operations

import (
	"openapi/pkg/models/shared"
)

type BatchGetReportsXAmzTargetEnum string

const (
	BatchGetReportsXAmzTargetEnumCodeBuild20161006BatchGetReports BatchGetReportsXAmzTargetEnum = "CodeBuild_20161006.BatchGetReports"
)

type BatchGetReportsHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchGetReportsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type BatchGetReportsRequest struct {
	Headers BatchGetReportsHeaders
	Request shared.BatchGetReportsInput `request:"mediaType=application/json"`
}

type BatchGetReportsResponse struct {
	BatchGetReportsOutput *shared.BatchGetReportsOutput
	ContentType           string
	InvalidInputException *interface{}
	StatusCode            int64
}
