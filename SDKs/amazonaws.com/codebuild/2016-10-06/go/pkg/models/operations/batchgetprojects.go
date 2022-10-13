package operations

import (
	"openapi/pkg/models/shared"
)

type BatchGetProjectsXAmzTargetEnum string

const (
	BatchGetProjectsXAmzTargetEnumCodeBuild20161006BatchGetProjects BatchGetProjectsXAmzTargetEnum = "CodeBuild_20161006.BatchGetProjects"
)

type BatchGetProjectsHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchGetProjectsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type BatchGetProjectsRequest struct {
	Headers BatchGetProjectsHeaders
	Request shared.BatchGetProjectsInput `request:"mediaType=application/json"`
}

type BatchGetProjectsResponse struct {
	BatchGetProjectsOutput *shared.BatchGetProjectsOutput
	ContentType            string
	InvalidInputException  *interface{}
	StatusCode             int64
}
