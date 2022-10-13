package operations

import (
	"openapi/pkg/models/shared"
)

type StopReplicationTaskXAmzTargetEnum string

const (
	StopReplicationTaskXAmzTargetEnumAmazonDmSv20160101StopReplicationTask StopReplicationTaskXAmzTargetEnum = "AmazonDMSv20160101.StopReplicationTask"
)

type StopReplicationTaskHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StopReplicationTaskXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StopReplicationTaskRequest struct {
	Headers StopReplicationTaskHeaders
	Request shared.StopReplicationTaskMessage `request:"mediaType=application/json"`
}

type StopReplicationTaskResponse struct {
	ContentType                 string
	InvalidResourceStateFault   *interface{}
	ResourceNotFoundFault       *interface{}
	StatusCode                  int64
	StopReplicationTaskResponse *shared.StopReplicationTaskResponse
}
