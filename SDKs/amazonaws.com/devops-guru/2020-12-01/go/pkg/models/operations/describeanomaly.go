package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAnomalyPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=Id"`
}

type DescribeAnomalyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeAnomalyRequest struct {
	PathParams DescribeAnomalyPathParams
	Headers    DescribeAnomalyHeaders
}

type DescribeAnomalyResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	DescribeAnomalyResponse   *shared.DescribeAnomalyResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
