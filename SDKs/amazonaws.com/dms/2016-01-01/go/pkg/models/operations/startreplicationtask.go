package operations

import (
	"openapi/pkg/models/shared"
)

type StartReplicationTaskXAmzTargetEnum string

const (
	StartReplicationTaskXAmzTargetEnumAmazonDmSv20160101StartReplicationTask StartReplicationTaskXAmzTargetEnum = "AmazonDMSv20160101.StartReplicationTask"
)

type StartReplicationTaskHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartReplicationTaskXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartReplicationTaskRequest struct {
	Headers StartReplicationTaskHeaders
	Request shared.StartReplicationTaskMessage `request:"mediaType=application/json"`
}

type StartReplicationTaskResponse struct {
	AccessDeniedFault            *interface{}
	ContentType                  string
	InvalidResourceStateFault    *interface{}
	ResourceNotFoundFault        *interface{}
	StartReplicationTaskResponse *shared.StartReplicationTaskResponse
	StatusCode                   int64
}
