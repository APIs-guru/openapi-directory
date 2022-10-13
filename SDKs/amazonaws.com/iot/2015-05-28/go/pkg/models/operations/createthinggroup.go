package operations

import (
	"openapi/pkg/models/shared"
)

type CreateThingGroupPathParams struct {
	ThingGroupName string `pathParam:"style=simple,explode=false,name=thingGroupName"`
}

type CreateThingGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateThingGroupRequestBodyThingGroupProperties struct {
	AttributePayload      *shared.AttributePayload `json:"attributePayload"`
	ThingGroupDescription *string                  `json:"thingGroupDescription"`
}

type CreateThingGroupRequestBody struct {
	ParentGroupName      *string                                          `json:"parentGroupName"`
	Tags                 []shared.Tag                                     `json:"tags"`
	ThingGroupProperties *CreateThingGroupRequestBodyThingGroupProperties `json:"thingGroupProperties"`
}

type CreateThingGroupRequest struct {
	PathParams CreateThingGroupPathParams
	Headers    CreateThingGroupHeaders
	Request    CreateThingGroupRequestBody `request:"mediaType=application/json"`
}

type CreateThingGroupResponse struct {
	ContentType                    string
	CreateThingGroupResponse       *shared.CreateThingGroupResponse
	InternalFailureException       *interface{}
	InvalidRequestException        *interface{}
	ResourceAlreadyExistsException *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
}
