package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeBackupPolicyPathParams struct {
	FileSystemID string `pathParam:"style=simple,explode=false,name=FileSystemId"`
}

type DescribeBackupPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
