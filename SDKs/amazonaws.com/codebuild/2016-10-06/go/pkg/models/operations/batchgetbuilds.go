package operations

import (
	"openapi/pkg/models/shared"
)

type BatchGetBuildsXAmzTargetEnum string

const (
	BatchGetBuildsXAmzTargetEnumCodeBuild20161006BatchGetBuilds BatchGetBuildsXAmzTargetEnum = "CodeBuild_20161006.BatchGetBuilds"
)

type BatchGetBuildsHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchGetBuildsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type BatchGetBuildsRequest struct {
	Headers BatchGetBuildsHeaders
	Request shared.BatchGetBuildsInput `request:"mediaType=application/json"`
}

type BatchGetBuildsResponse struct {
	BatchGetBuildsOutput  *shared.BatchGetBuildsOutput
	ContentType           string
	InvalidInputException *interface{}
	StatusCode            int64
}
