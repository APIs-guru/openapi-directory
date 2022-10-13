package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeGlobalTableXAmzTargetEnum string

const (
	DescribeGlobalTableXAmzTargetEnumDynamoDb20120810DescribeGlobalTable DescribeGlobalTableXAmzTargetEnum = "DynamoDB_20120810.DescribeGlobalTable"
)

type DescribeGlobalTableHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeGlobalTableXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeGlobalTableRequest struct {
	Headers DescribeGlobalTableHeaders
	Request shared.DescribeGlobalTableInput `request:"mediaType=application/json"`
}

type DescribeGlobalTableResponse struct {
	ContentType                  string
	DescribeGlobalTableOutput    *shared.DescribeGlobalTableOutput
	GlobalTableNotFoundException *interface{}
	InternalServerError          *interface{}
	StatusCode                   int64
}
