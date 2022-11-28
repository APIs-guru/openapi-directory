package operations

import (
	"openapi/pkg/models/shared"
)

type CreateThingPathParams struct {
	ThingName string `pathParam:"style=simple,explode=false,name=thingName"`
}

type CreateThingHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// CreateThingRequestBodyAttributePayload
// The attribute payload.
type CreateThingRequestBodyAttributePayload struct {
	Attributes map[string]string `json:"attributes,omitempty"`
	Merge      *bool             `json:"merge,omitempty"`
}

type CreateThingRequestBody struct {
	AttributePayload *CreateThingRequestBodyAttributePayload `json:"attributePayload,omitempty"`
	BillingGroupName *string                                 `json:"billingGroupName,omitempty"`
	ThingTypeName    *string                                 `json:"thingTypeName,omitempty"`
}

type CreateThingRequest struct {
	PathParams CreateThingPathParams
	Headers    CreateThingHeaders
	Request    CreateThingRequestBody `request:"mediaType=application/json"`
}

type CreateThingResponse struct {
	ContentType                    string
	CreateThingResponse            *shared.CreateThingResponse
	InternalFailureException       *interface{}
	InvalidRequestException        *interface{}
	ResourceAlreadyExistsException *interface{}
	ResourceNotFoundException      *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
	UnauthorizedException          *interface{}
}
