package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeRefreshSchemasStatusXAmzTargetEnum string

const (
	DescribeRefreshSchemasStatusXAmzTargetEnumAmazonDmSv20160101DescribeRefreshSchemasStatus DescribeRefreshSchemasStatusXAmzTargetEnum = "AmazonDMSv20160101.DescribeRefreshSchemasStatus"
)

type DescribeRefreshSchemasStatusHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeRefreshSchemasStatusXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeRefreshSchemasStatusRequest struct {
	Headers DescribeRefreshSchemasStatusHeaders
	Request shared.DescribeRefreshSchemasStatusMessage `request:"mediaType=application/json"`
}

type DescribeRefreshSchemasStatusResponse struct {
	ContentType                          string
	DescribeRefreshSchemasStatusResponse *shared.DescribeRefreshSchemasStatusResponse
	InvalidResourceStateFault            *interface{}
	ResourceNotFoundFault                *interface{}
	StatusCode                           int64
}
