package operations

import (
	"openapi/pkg/models/shared"
)

type StopReplicationTaskXAmzTargetEnum string

const (
	StopReplicationTaskXAmzTargetEnumAmazonDmSv20160101StopReplicationTask StopReplicationTaskXAmzTargetEnum = "AmazonDMSv20160101.StopReplicationTask"
)

type StopReplicationTaskHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StopReplicationTaskXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
