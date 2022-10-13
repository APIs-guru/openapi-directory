package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeGatewayPathParams struct {
	GatewayID string `pathParam:"style=simple,explode=false,name=gatewayId"`
}

type DescribeGatewayHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeGatewayRequest struct {
	PathParams DescribeGatewayPathParams
	Headers    DescribeGatewayHeaders
}

type DescribeGatewayResponse struct {
	ContentType               string
	DescribeGatewayResponse   *shared.DescribeGatewayResponse
	InternalFailureException  *interface{}
	InvalidRequestException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
}
