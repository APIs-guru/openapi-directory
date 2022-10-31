package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSubnetGroupXAmzTargetEnum string

const (
	DeleteSubnetGroupXAmzTargetEnumAmazonDaxv3DeleteSubnetGroup DeleteSubnetGroupXAmzTargetEnum = "AmazonDAXV3.DeleteSubnetGroup"
)

type DeleteSubnetGroupHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteSubnetGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteSubnetGroupRequest struct {
	Headers DeleteSubnetGroupHeaders
	Request shared.DeleteSubnetGroupRequest `request:"mediaType=application/json"`
}

type DeleteSubnetGroupResponse struct {
	ContentType                    string
	DeleteSubnetGroupResponse      *shared.DeleteSubnetGroupResponse
	ServiceLinkedRoleNotFoundFault *interface{}
	StatusCode                     int64
	SubnetGroupInUseFault          *interface{}
	SubnetGroupNotFoundFault       *interface{}
}
