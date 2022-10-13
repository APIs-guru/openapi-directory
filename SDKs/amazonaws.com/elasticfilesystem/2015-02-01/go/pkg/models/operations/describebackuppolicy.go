package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeBackupPolicyPathParams struct {
	FileSystemID string `pathParam:"style=simple,explode=false,name=FileSystemId"`
}

type DescribeBackupPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeBackupPolicyRequest struct {
	PathParams DescribeBackupPolicyPathParams
	Headers    DescribeBackupPolicyHeaders
}

type DescribeBackupPolicyResponse struct {
	BackupPolicyDescription *shared.BackupPolicyDescription
	BadRequest              *interface{}
	ContentType             string
	FileSystemNotFound      *interface{}
	InternalServerError     *interface{}
	PolicyNotFound          *interface{}
	StatusCode              int64
	ValidationException     *interface{}
}
