package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDynamicThingGroupPathParams struct {
	ThingGroupName string `pathParam:"style=simple,explode=false,name=thingGroupName"`
}

type UpdateDynamicThingGroupHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateDynamicThingGroupRequestBodyThingGroupProperties struct {
	AttributePayload      *shared.AttributePayload `json:"attributePayload,omitempty"`
	ThingGroupDescription *string                  `json:"thingGroupDescription,omitempty"`
}

type UpdateDynamicThingGroupRequestBody struct {
	ExpectedVersion      *int64                                                 `json:"expectedVersion,omitempty"`
	IndexName            *string                                                `json:"indexName,omitempty"`
	QueryString          *string                                                `json:"queryString,omitempty"`
	QueryVersion         *string                                                `json:"queryVersion,omitempty"`
	ThingGroupProperties UpdateDynamicThingGroupRequestBodyThingGroupProperties `json:"thingGroupProperties"`
}

type UpdateDynamicThingGroupRequest struct {
	PathParams UpdateDynamicThingGroupPathParams
	Headers    UpdateDynamicThingGroupHeaders
	Request    UpdateDynamicThingGroupRequestBody `request:"mediaType=application/json"`
}

type UpdateDynamicThingGroupResponse struct {
	ContentType                     string
	InternalFailureException        *interface{}
	InvalidQueryException           *interface{}
	InvalidRequestException         *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
	ThrottlingException             *interface{}
	UpdateDynamicThingGroupResponse *shared.UpdateDynamicThingGroupResponse
	VersionConflictException        *interface{}
}
