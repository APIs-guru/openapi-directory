package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeBackupXAmzTargetEnum string

const (
	DescribeBackupXAmzTargetEnumDynamoDb20120810DescribeBackup DescribeBackupXAmzTargetEnum = "DynamoDB_20120810.DescribeBackup"
)

type DescribeBackupHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeBackupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
