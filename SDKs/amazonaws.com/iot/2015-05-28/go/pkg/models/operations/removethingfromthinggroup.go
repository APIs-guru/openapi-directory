package operations

type RemoveThingFromThingGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type RemoveThingFromThingGroupRequestBody struct {
	ThingArn       *string `json:"thingArn"`
	ThingGroupArn  *string `json:"thingGroupArn"`
	ThingGroupName *string `json:"thingGroupName"`
	ThingName      *string `json:"thingName"`
}

type RemoveThingFromThingGroupRequest struct {
	Headers RemoveThingFromThingGroupHeaders
	Request RemoveThingFromThingGroupRequestBody `request:"mediaType=application/json"`
}

type RemoveThingFromThingGroupResponse struct {
	ContentType                       string
	InternalFailureException          *interface{}
	InvalidRequestException           *interface{}
	RemoveThingFromThingGroupResponse map[string]interface{}
	ResourceNotFoundException         *interface{}
	StatusCode                        int64
	ThrottlingException               *interface{}
}
