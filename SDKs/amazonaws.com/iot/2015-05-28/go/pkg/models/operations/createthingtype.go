package operations

import (
	"openapi/pkg/models/shared"
)

type CreateThingTypePathParams struct {
	ThingTypeName string `pathParam:"style=simple,explode=false,name=thingTypeName"`
}

type CreateThingTypeHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateThingTypeRequestBodyThingTypeProperties struct {
	SearchableAttributes []string `json:"searchableAttributes,omitempty"`
	ThingTypeDescription *string  `json:"thingTypeDescription,omitempty"`
}

type CreateThingTypeRequestBody struct {
	Tags                []shared.Tag                                   `json:"tags,omitempty"`
	ThingTypeProperties *CreateThingTypeRequestBodyThingTypeProperties `json:"thingTypeProperties,omitempty"`
}

type CreateThingTypeRequest struct {
	PathParams CreateThingTypePathParams
	Headers    CreateThingTypeHeaders
	Request    CreateThingTypeRequestBody `request:"mediaType=application/json"`
}

type CreateThingTypeResponse struct {
	ContentType                    string
	CreateThingTypeResponse        *shared.CreateThingTypeResponse
	InternalFailureException       *interface{}
	InvalidRequestException        *interface{}
	ResourceAlreadyExistsException *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
	UnauthorizedException          *interface{}
}
