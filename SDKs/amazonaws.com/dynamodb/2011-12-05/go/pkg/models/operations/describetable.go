package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeTableXAmzTargetEnum string

const (
	DescribeTableXAmzTargetEnumDynamoDb20111205DescribeTable DescribeTableXAmzTargetEnum = "DynamoDB_20111205.DescribeTable"
)

type DescribeTableHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeTableXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeTableRequest struct {
	Headers DescribeTableHeaders
	Request shared.DescribeTableInput `request:"mediaType=application/json"`
}

type DescribeTableResponse struct {
	ContentType               string
	DescribeTableOutput       *shared.DescribeTableOutput
	InternalServerError       *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
