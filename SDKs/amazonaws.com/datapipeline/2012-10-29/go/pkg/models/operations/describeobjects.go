package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeObjectsQueryParams struct {
	Marker *string `queryParam:"style=form,explode=true,name=marker"`
}

type DescribeObjectsXAmzTargetEnum string

const (
	DescribeObjectsXAmzTargetEnumDataPipelineDescribeObjects DescribeObjectsXAmzTargetEnum = "DataPipeline.DescribeObjects"
)

type DescribeObjectsHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeObjectsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeObjectsRequest struct {
	QueryParams DescribeObjectsQueryParams
	Headers     DescribeObjectsHeaders
	Request     shared.DescribeObjectsInput `request:"mediaType=application/json"`
}

type DescribeObjectsResponse struct {
	ContentType               string
	DescribeObjectsOutput     *shared.DescribeObjectsOutput
	InternalServiceError      *interface{}
	InvalidRequestException   *interface{}
	PipelineDeletedException  *interface{}
	PipelineNotFoundException *interface{}
	StatusCode                int64
}
