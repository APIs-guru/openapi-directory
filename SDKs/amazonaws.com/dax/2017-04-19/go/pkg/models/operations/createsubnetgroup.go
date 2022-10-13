package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSubnetGroupXAmzTargetEnum string

const (
	CreateSubnetGroupXAmzTargetEnumAmazonDaxv3CreateSubnetGroup CreateSubnetGroupXAmzTargetEnum = "AmazonDAXV3.CreateSubnetGroup"
)

type CreateSubnetGroupHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateSubnetGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateSubnetGroupRequest struct {
	Headers CreateSubnetGroupHeaders
	Request shared.CreateSubnetGroupRequest `request:"mediaType=application/json"`
}

type CreateSubnetGroupResponse struct {
	ContentType                    string
	CreateSubnetGroupResponse      *shared.CreateSubnetGroupResponse
	InvalidSubnet                  *interface{}
	ServiceLinkedRoleNotFoundFault *interface{}
	StatusCode                     int64
	SubnetGroupAlreadyExistsFault  *interface{}
	SubnetGroupQuotaExceededFault  *interface{}
	SubnetQuotaExceededFault       *interface{}
}
