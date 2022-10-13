package operations

import (
	"openapi/pkg/models/shared"
)

type CreateThingTypePathParams struct {
	ThingTypeName string `pathParam:"style=simple,explode=false,name=thingTypeName"`
}

type CreateThingTypeHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateThingTypeRequestBodyThingTypeProperties struct {
	SearchableAttributes []string `json:"searchableAttributes"`
	ThingTypeDescription *string  `json:"thingTypeDescription"`
}

type CreateThingTypeRequestBody struct {
	Tags                []shared.Tag                                   `json:"tags"`
	ThingTypeProperties *CreateThingTypeRequestBodyThingTypeProperties `json:"thingTypeProperties"`
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
