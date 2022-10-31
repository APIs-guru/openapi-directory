package operations

import (
	"openapi/pkg/models/shared"
)

type MoveReplicationTaskXAmzTargetEnum string

const (
	MoveReplicationTaskXAmzTargetEnumAmazonDmSv20160101MoveReplicationTask MoveReplicationTaskXAmzTargetEnum = "AmazonDMSv20160101.MoveReplicationTask"
)

type MoveReplicationTaskHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        MoveReplicationTaskXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type MoveReplicationTaskRequest struct {
	Headers MoveReplicationTaskHeaders
	Request shared.MoveReplicationTaskMessage `request:"mediaType=application/json"`
}

type MoveReplicationTaskResponse struct {
	AccessDeniedFault           *interface{}
	ContentType                 string
	InvalidResourceStateFault   *interface{}
	KmsKeyNotAccessibleFault    *interface{}
	MoveReplicationTaskResponse *shared.MoveReplicationTaskResponse
	ResourceNotFoundFault       *interface{}
	ResourceQuotaExceededFault  *interface{}
	StatusCode                  int64
}
