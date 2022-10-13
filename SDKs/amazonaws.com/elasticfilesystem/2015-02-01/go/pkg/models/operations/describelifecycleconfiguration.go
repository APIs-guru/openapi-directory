package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeLifecycleConfigurationPathParams struct {
	FileSystemID string `pathParam:"style=simple,explode=false,name=FileSystemId"`
}

type DescribeLifecycleConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeLifecycleConfigurationRequest struct {
	PathParams DescribeLifecycleConfigurationPathParams
	Headers    DescribeLifecycleConfigurationHeaders
}

type DescribeLifecycleConfigurationResponse struct {
	BadRequest                        *interface{}
	ContentType                       string
	FileSystemNotFound                *interface{}
	InternalServerError               *interface{}
	LifecycleConfigurationDescription *shared.LifecycleConfigurationDescription
	StatusCode                        int64
}
