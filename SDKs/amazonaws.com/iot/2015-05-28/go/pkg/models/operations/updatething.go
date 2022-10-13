package operations

type UpdateThingPathParams struct {
	ThingName string `pathParam:"style=simple,explode=false,name=thingName"`
}

type UpdateThingHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateThingRequestBodyAttributePayload struct {
	Attributes map[string]string `json:"attributes"`
	Merge      *bool             `json:"merge"`
}

type UpdateThingRequestBody struct {
	AttributePayload *UpdateThingRequestBodyAttributePayload `json:"attributePayload"`
	ExpectedVersion  *int64                                  `json:"expectedVersion"`
	RemoveThingType  *bool                                   `json:"removeThingType"`
	ThingTypeName    *string                                 `json:"thingTypeName"`
}

type UpdateThingRequest struct {
	PathParams UpdateThingPathParams
	Headers    UpdateThingHeaders
	Request    UpdateThingRequestBody `request:"mediaType=application/json"`
}

type UpdateThingResponse struct {
	ContentType                 string
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	UnauthorizedException       *interface{}
	UpdateThingResponse         map[string]interface{}
	VersionConflictException    *interface{}
}
