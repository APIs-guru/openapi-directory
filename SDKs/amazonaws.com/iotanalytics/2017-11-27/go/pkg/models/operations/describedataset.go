package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDatasetPathParams struct {
	DatasetName string `pathParam:"style=simple,explode=false,name=datasetName"`
}

type DescribeDatasetHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeDatasetRequest struct {
	PathParams DescribeDatasetPathParams
	Headers    DescribeDatasetHeaders
}

type DescribeDatasetResponse struct {
	ContentType                 string
	DescribeDatasetResponse     *shared.DescribeDatasetResponse
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
}
