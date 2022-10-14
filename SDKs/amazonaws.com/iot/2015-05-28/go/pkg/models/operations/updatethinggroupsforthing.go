package operations

type UpdateThingGroupsForThingHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateThingGroupsForThingRequestBody struct {
	OverrideDynamicGroups *bool    `json:"overrideDynamicGroups,omitempty"`
	ThingGroupsToAdd      []string `json:"thingGroupsToAdd,omitempty"`
	ThingGroupsToRemove   []string `json:"thingGroupsToRemove,omitempty"`
	ThingName             *string  `json:"thingName,omitempty"`
}

type UpdateThingGroupsForThingRequest struct {
	Headers UpdateThingGroupsForThingHeaders
	Request UpdateThingGroupsForThingRequestBody `request:"mediaType=application/json"`
}

type UpdateThingGroupsForThingResponse struct {
	ContentType                       string
	InternalFailureException          *interface{}
	InvalidRequestException           *interface{}
	ResourceNotFoundException         *interface{}
	StatusCode                        int64
	ThrottlingException               *interface{}
	UpdateThingGroupsForThingResponse map[string]interface{}
}
