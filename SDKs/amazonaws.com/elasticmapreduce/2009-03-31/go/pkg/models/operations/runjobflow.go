package operations

import (
	"openapi/pkg/models/shared"
)

type RunJobFlowXAmzTargetEnum string

const (
	RunJobFlowXAmzTargetEnumElasticMapReduceRunJobFlow RunJobFlowXAmzTargetEnum = "ElasticMapReduce.RunJobFlow"
)

type RunJobFlowHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RunJobFlowXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RunJobFlowRequest struct {
	Headers RunJobFlowHeaders
	Request shared.RunJobFlowInput `request:"mediaType=application/json"`
}

type RunJobFlowResponse struct {
	ContentType         string
	InternalServerError *interface{}
	RunJobFlowOutput    *shared.RunJobFlowOutput
	StatusCode          int64
}
