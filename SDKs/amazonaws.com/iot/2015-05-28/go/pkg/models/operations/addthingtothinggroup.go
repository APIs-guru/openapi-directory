package operations

type AddThingToThingGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type AddThingToThingGroupRequestBody struct {
	OverrideDynamicGroups *bool   `json:"overrideDynamicGroups"`
	ThingArn              *string `json:"thingArn"`
	ThingGroupArn         *string `json:"thingGroupArn"`
	ThingGroupName        *string `json:"thingGroupName"`
	ThingName             *string `json:"thingName"`
}

type AddThingToThingGroupRequest struct {
	Headers AddThingToThingGroupHeaders
	Request AddThingToThingGroupRequestBody `request:"mediaType=application/json"`
}

type AddThingToThingGroupResponse struct {
	AddThingToThingGroupResponse map[string]interface{}
	ContentType                  string
	InternalFailureException     *interface{}
	InvalidRequestException      *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	ThrottlingException          *interface{}
}
