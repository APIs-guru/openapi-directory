package operations

import (
	"openapi/pkg/models/shared"
)

type CreateReplicationSubnetGroupXAmzTargetEnum string

const (
	CreateReplicationSubnetGroupXAmzTargetEnumAmazonDmSv20160101CreateReplicationSubnetGroup CreateReplicationSubnetGroupXAmzTargetEnum = "AmazonDMSv20160101.CreateReplicationSubnetGroup"
)

type CreateReplicationSubnetGroupHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateReplicationSubnetGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateReplicationSubnetGroupRequest struct {
	Headers CreateReplicationSubnetGroupHeaders
	Request shared.CreateReplicationSubnetGroupMessage `request:"mediaType=application/json"`
}

type CreateReplicationSubnetGroupResponse struct {
	AccessDeniedFault                           *interface{}
	ContentType                                 string
	CreateReplicationSubnetGroupResponse        *shared.CreateReplicationSubnetGroupResponse
	InvalidSubnet                               *interface{}
	ReplicationSubnetGroupDoesNotCoverEnoughAZs *interface{}
	ResourceAlreadyExistsFault                  *interface{}
	ResourceNotFoundFault                       *interface{}
	ResourceQuotaExceededFault                  *interface{}
	StatusCode                                  int64
}
