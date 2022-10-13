package operations

import (
	"openapi/pkg/models/shared"
)

type TerminateJobFlowsXAmzTargetEnum string

const (
	TerminateJobFlowsXAmzTargetEnumElasticMapReduceTerminateJobFlows TerminateJobFlowsXAmzTargetEnum = "ElasticMapReduce.TerminateJobFlows"
)

type TerminateJobFlowsHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        TerminateJobFlowsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type TerminateJobFlowsRequest struct {
	Headers TerminateJobFlowsHeaders
	Request shared.TerminateJobFlowsInput `request:"mediaType=application/json"`
}

type TerminateJobFlowsResponse struct {
	ContentType         string
	InternalServerError *interface{}
	StatusCode          int64
}
