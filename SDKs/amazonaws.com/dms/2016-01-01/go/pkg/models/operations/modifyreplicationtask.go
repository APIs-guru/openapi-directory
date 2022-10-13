package operations

import (
	"openapi/pkg/models/shared"
)

type ModifyReplicationTaskXAmzTargetEnum string

const (
	ModifyReplicationTaskXAmzTargetEnumAmazonDmSv20160101ModifyReplicationTask ModifyReplicationTaskXAmzTargetEnum = "AmazonDMSv20160101.ModifyReplicationTask"
)

type ModifyReplicationTaskHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ModifyReplicationTaskXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ModifyReplicationTaskRequest struct {
	Headers ModifyReplicationTaskHeaders
	Request shared.ModifyReplicationTaskMessage `request:"mediaType=application/json"`
}

type ModifyReplicationTaskResponse struct {
	ContentType                   string
	InvalidResourceStateFault     *interface{}
	KmsKeyNotAccessibleFault      *interface{}
	ModifyReplicationTaskResponse *shared.ModifyReplicationTaskResponse
	ResourceAlreadyExistsFault    *interface{}
	ResourceNotFoundFault         *interface{}
	StatusCode                    int64
}
