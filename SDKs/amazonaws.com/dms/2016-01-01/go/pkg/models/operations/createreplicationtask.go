package operations

import (
	"openapi/pkg/models/shared"
)

type CreateReplicationTaskXAmzTargetEnum string

const (
	CreateReplicationTaskXAmzTargetEnumAmazonDmSv20160101CreateReplicationTask CreateReplicationTaskXAmzTargetEnum = "AmazonDMSv20160101.CreateReplicationTask"
)

type CreateReplicationTaskHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateReplicationTaskXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateReplicationTaskRequest struct {
	Headers CreateReplicationTaskHeaders
	Request shared.CreateReplicationTaskMessage `request:"mediaType=application/json"`
}

type CreateReplicationTaskResponse struct {
	AccessDeniedFault             *interface{}
	ContentType                   string
	CreateReplicationTaskResponse *shared.CreateReplicationTaskResponse
	InvalidResourceStateFault     *interface{}
	KmsKeyNotAccessibleFault      *interface{}
	ResourceAlreadyExistsFault    *interface{}
	ResourceNotFoundFault         *interface{}
	ResourceQuotaExceededFault    *interface{}
	StatusCode                    int64
}
