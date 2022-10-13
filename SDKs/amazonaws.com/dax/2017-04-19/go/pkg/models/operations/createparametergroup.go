package operations

import (
	"openapi/pkg/models/shared"
)

type CreateParameterGroupXAmzTargetEnum string

const (
	CreateParameterGroupXAmzTargetEnumAmazonDaxv3CreateParameterGroup CreateParameterGroupXAmzTargetEnum = "AmazonDAXV3.CreateParameterGroup"
)

type CreateParameterGroupHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateParameterGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateParameterGroupRequest struct {
	Headers CreateParameterGroupHeaders
	Request shared.CreateParameterGroupRequest `request:"mediaType=application/json"`
}

type CreateParameterGroupResponse struct {
	ContentType                          string
	CreateParameterGroupResponse         *shared.CreateParameterGroupResponse
	InvalidParameterCombinationException *interface{}
	InvalidParameterGroupStateFault      *interface{}
	InvalidParameterValueException       *interface{}
	ParameterGroupAlreadyExistsFault     *interface{}
	ParameterGroupQuotaExceededFault     *interface{}
	ServiceLinkedRoleNotFoundFault       *interface{}
	StatusCode                           int64
}
