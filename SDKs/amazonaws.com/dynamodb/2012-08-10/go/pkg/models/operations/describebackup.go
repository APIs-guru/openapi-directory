package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeBackupXAmzTargetEnum string

const (
	DescribeBackupXAmzTargetEnumDynamoDb20120810DescribeBackup DescribeBackupXAmzTargetEnum = "DynamoDB_20120810.DescribeBackup"
)

type DescribeBackupHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeBackupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeBackupRequest struct {
	Headers DescribeBackupHeaders
	Request shared.DescribeBackupInput `request:"mediaType=application/json"`
}

type DescribeBackupResponse struct {
	BackupNotFoundException *interface{}
	ContentType             string
	DescribeBackupOutput    *shared.DescribeBackupOutput
	InternalServerError     *interface{}
	StatusCode              int64
}
