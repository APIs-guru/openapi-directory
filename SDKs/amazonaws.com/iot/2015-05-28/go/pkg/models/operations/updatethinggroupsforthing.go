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
	OverrideDynamicGroups *bool    `json:"overrideDynamicGroups"`
	ThingGroupsToAdd      []string `json:"thingGroupsToAdd"`
	ThingGroupsToRemove   []string `json:"thingGroupsToRemove"`
	ThingName             *string  `json:"thingName"`
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
