package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDynamicThingGroupPathParams struct {
	ThingGroupName string `pathParam:"style=simple,explode=false,name=thingGroupName"`
}

type CreateDynamicThingGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateDynamicThingGroupRequestBodyThingGroupProperties struct {
	AttributePayload      *shared.AttributePayload `json:"attributePayload,omitempty"`
	ThingGroupDescription *string                  `json:"thingGroupDescription,omitempty"`
}

type CreateDynamicThingGroupRequestBody struct {
	IndexName            *string                                                 `json:"indexName,omitempty"`
	QueryString          string                                                  `json:"queryString"`
	QueryVersion         *string                                                 `json:"queryVersion,omitempty"`
	Tags                 []shared.Tag                                            `json:"tags,omitempty"`
	ThingGroupProperties *CreateDynamicThingGroupRequestBodyThingGroupProperties `json:"thingGroupProperties,omitempty"`
}

type CreateDynamicThingGroupRequest struct {
	PathParams CreateDynamicThingGroupPathParams
	Headers    CreateDynamicThingGroupHeaders
	Request    CreateDynamicThingGroupRequestBody `request:"mediaType=application/json"`
}

type CreateDynamicThingGroupResponse struct {
	ContentType                     string
	CreateDynamicThingGroupResponse *shared.CreateDynamicThingGroupResponse
	InternalFailureException        *interface{}
	InvalidQueryException           *interface{}
	InvalidRequestException         *interface{}
	LimitExceededException          *interface{}
	ResourceAlreadyExistsException  *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
	ThrottlingException             *interface{}
}
