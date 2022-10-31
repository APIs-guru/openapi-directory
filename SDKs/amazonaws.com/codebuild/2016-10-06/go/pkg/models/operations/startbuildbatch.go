package operations

import (
	"openapi/pkg/models/shared"
)

type StartBuildBatchXAmzTargetEnum string

const (
	StartBuildBatchXAmzTargetEnumCodeBuild20161006StartBuildBatch StartBuildBatchXAmzTargetEnum = "CodeBuild_20161006.StartBuildBatch"
)

type StartBuildBatchHeaders struct {
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StartBuildBatchXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type StartBuildBatchRequest struct {
	Headers StartBuildBatchHeaders
	Request shared.StartBuildBatchInput `request:"mediaType=application/json"`
}

type StartBuildBatchResponse struct {
	ContentType               string
	InvalidInputException     *interface{}
	ResourceNotFoundException *interface{}
	StartBuildBatchOutput     *shared.StartBuildBatchOutput
	StatusCode                int64
}
