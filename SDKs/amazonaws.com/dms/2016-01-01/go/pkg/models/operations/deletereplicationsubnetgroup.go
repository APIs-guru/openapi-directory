package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteReplicationSubnetGroupXAmzTargetEnum string

const (
	DeleteReplicationSubnetGroupXAmzTargetEnumAmazonDmSv20160101DeleteReplicationSubnetGroup DeleteReplicationSubnetGroupXAmzTargetEnum = "AmazonDMSv20160101.DeleteReplicationSubnetGroup"
)

type DeleteReplicationSubnetGroupHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteReplicationSubnetGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteReplicationSubnetGroupRequest struct {
	Headers DeleteReplicationSubnetGroupHeaders
	Request shared.DeleteReplicationSubnetGroupMessage `request:"mediaType=application/json"`
}

type DeleteReplicationSubnetGroupResponse struct {
	ContentType                          string
	DeleteReplicationSubnetGroupResponse map[string]interface{}
	InvalidResourceStateFault            *interface{}
	ResourceNotFoundFault                *interface{}
	StatusCode                           int64
}
