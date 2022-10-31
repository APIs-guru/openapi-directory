package operations

import (
	"openapi/pkg/models/shared"
)

type RunJobFlowXAmzTargetEnum string

const (
	RunJobFlowXAmzTargetEnumElasticMapReduceRunJobFlow RunJobFlowXAmzTargetEnum = "ElasticMapReduce.RunJobFlow"
)

type RunJobFlowHeaders struct {
	XAmzAlgorithm     *string                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        RunJobFlowXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
