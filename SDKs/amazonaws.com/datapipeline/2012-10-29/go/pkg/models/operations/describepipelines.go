package operations

import (
	"openapi/pkg/models/shared"
)

type DescribePipelinesXAmzTargetEnum string

const (
	DescribePipelinesXAmzTargetEnumDataPipelineDescribePipelines DescribePipelinesXAmzTargetEnum = "DataPipeline.DescribePipelines"
)

type DescribePipelinesHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribePipelinesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribePipelinesRequest struct {
	Headers DescribePipelinesHeaders
	Request shared.DescribePipelinesInput `request:"mediaType=application/json"`
}

type DescribePipelinesResponse struct {
	ContentType               string
	DescribePipelinesOutput   *shared.DescribePipelinesOutput
	InternalServiceError      *interface{}
	InvalidRequestException   *interface{}
	PipelineDeletedException  *interface{}
	PipelineNotFoundException *interface{}
	StatusCode                int64
}
