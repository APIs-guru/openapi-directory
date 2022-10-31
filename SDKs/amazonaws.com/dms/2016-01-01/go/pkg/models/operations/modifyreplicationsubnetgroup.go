package operations

import (
	"openapi/pkg/models/shared"
)

type ModifyReplicationSubnetGroupXAmzTargetEnum string

const (
	ModifyReplicationSubnetGroupXAmzTargetEnumAmazonDmSv20160101ModifyReplicationSubnetGroup ModifyReplicationSubnetGroupXAmzTargetEnum = "AmazonDMSv20160101.ModifyReplicationSubnetGroup"
)

type ModifyReplicationSubnetGroupHeaders struct {
	XAmzAlgorithm     *string                                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ModifyReplicationSubnetGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ModifyReplicationSubnetGroupRequest struct {
	Headers ModifyReplicationSubnetGroupHeaders
	Request shared.ModifyReplicationSubnetGroupMessage `request:"mediaType=application/json"`
}

type ModifyReplicationSubnetGroupResponse struct {
	AccessDeniedFault                           *interface{}
	ContentType                                 string
	InvalidSubnet                               *interface{}
	ModifyReplicationSubnetGroupResponse        *shared.ModifyReplicationSubnetGroupResponse
	ReplicationSubnetGroupDoesNotCoverEnoughAZs *interface{}
	ResourceNotFoundFault                       *interface{}
	ResourceQuotaExceededFault                  *interface{}
	StatusCode                                  int64
	SubnetAlreadyInUse                          *interface{}
}
