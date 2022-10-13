package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDetectorPathParams struct {
	DetectorModelName string `pathParam:"style=simple,explode=false,name=detectorModelName"`
}

type DescribeDetectorQueryParams struct {
	KeyValue *string `queryParam:"style=form,explode=true,name=keyValue"`
}

type DescribeDetectorHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeDetectorRequest struct {
	PathParams  DescribeDetectorPathParams
	QueryParams DescribeDetectorQueryParams
	Headers     DescribeDetectorHeaders
}

type DescribeDetectorResponse struct {
	ContentType                 string
	DescribeDetectorResponse    *shared.DescribeDetectorResponse
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
}
