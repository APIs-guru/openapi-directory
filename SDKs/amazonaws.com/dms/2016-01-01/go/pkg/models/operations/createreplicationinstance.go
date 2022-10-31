package operations

import (
	"openapi/pkg/models/shared"
)

type CreateReplicationInstanceXAmzTargetEnum string

const (
	CreateReplicationInstanceXAmzTargetEnumAmazonDmSv20160101CreateReplicationInstance CreateReplicationInstanceXAmzTargetEnum = "AmazonDMSv20160101.CreateReplicationInstance"
)

type CreateReplicationInstanceHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateReplicationInstanceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
