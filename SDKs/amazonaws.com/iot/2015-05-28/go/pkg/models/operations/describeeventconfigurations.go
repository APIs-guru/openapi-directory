package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeEventConfigurationsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeEventConfigurationsRequest struct {
	Headers DescribeEventConfigurationsHeaders
}

type DescribeEventConfigurationsResponse struct {
	ContentType                         string
	DescribeEventConfigurationsResponse *shared.DescribeEventConfigurationsResponse
	InternalFailureException            *interface{}
	StatusCode                          int64
	ThrottlingException                 *interface{}
}
