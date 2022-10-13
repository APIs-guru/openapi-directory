package operations

import (
	"openapi/pkg/models/shared"
)

type CreateReplicationInstanceXAmzTargetEnum string

const (
	CreateReplicationInstanceXAmzTargetEnumAmazonDmSv20160101CreateReplicationInstance CreateReplicationInstanceXAmzTargetEnum = "AmazonDMSv20160101.CreateReplicationInstance"
)

type CreateReplicationInstanceHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateReplicationInstanceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateReplicationInstanceRequest struct {
	Headers CreateReplicationInstanceHeaders
	Request shared.CreateReplicationInstanceMessage `request:"mediaType=application/json"`
}

type CreateReplicationInstanceResponse struct {
	AccessDeniedFault                           *interface{}
	ContentType                                 string
	CreateReplicationInstanceResponse           *shared.CreateReplicationInstanceResponse
	InsufficientResourceCapacityFault           *interface{}
	InvalidResourceStateFault                   *interface{}
	InvalidSubnet                               *interface{}
	KmsKeyNotAccessibleFault                    *interface{}
	ReplicationSubnetGroupDoesNotCoverEnoughAZs *interface{}
	ResourceAlreadyExistsFault                  *interface{}
	ResourceNotFoundFault                       *interface{}
	ResourceQuotaExceededFault                  *interface{}
	StatusCode                                  int64
	StorageQuotaExceededFault                   *interface{}
}
