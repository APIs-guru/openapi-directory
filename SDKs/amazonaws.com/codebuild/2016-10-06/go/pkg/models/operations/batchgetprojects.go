package operations

import (
	"openapi/pkg/models/shared"
)

type BatchGetProjectsXAmzTargetEnum string

const (
	BatchGetProjectsXAmzTargetEnumCodeBuild20161006BatchGetProjects BatchGetProjectsXAmzTargetEnum = "CodeBuild_20161006.BatchGetProjects"
)

type BatchGetProjectsHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchGetProjectsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
