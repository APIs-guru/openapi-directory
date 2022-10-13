package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteParameterGroupXAmzTargetEnum string

const (
	DeleteParameterGroupXAmzTargetEnumAmazonDaxv3DeleteParameterGroup DeleteParameterGroupXAmzTargetEnum = "AmazonDAXV3.DeleteParameterGroup"
)

type DeleteParameterGroupHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteParameterGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteParameterGroupRequest struct {
	Headers DeleteParameterGroupHeaders
	Request shared.DeleteParameterGroupRequest `request:"mediaType=application/json"`
}

type DeleteParameterGroupResponse struct {
	ContentType                          string
	DeleteParameterGroupResponse         *shared.DeleteParameterGroupResponse
	InvalidParameterCombinationException *interface{}
	InvalidParameterGroupStateFault      *interface{}
	InvalidParameterValueException       *interface{}
	ParameterGroupNotFoundFault          *interface{}
	ServiceLinkedRoleNotFoundFault       *interface{}
	StatusCode                           int64
}
