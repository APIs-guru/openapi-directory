package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeExportXAmzTargetEnum string

const (
	DescribeExportXAmzTargetEnumDynamoDb20120810DescribeExport DescribeExportXAmzTargetEnum = "DynamoDB_20120810.DescribeExport"
)

type DescribeExportHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeExportXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeExportRequest struct {
	Headers DescribeExportHeaders
	Request shared.DescribeExportInput `request:"mediaType=application/json"`
}

type DescribeExportResponse struct {
	ContentType             string
	DescribeExportOutput    *shared.DescribeExportOutput
	ExportNotFoundException *interface{}
	InternalServerError     *interface{}
	LimitExceededException  *interface{}
	StatusCode              int64
}
