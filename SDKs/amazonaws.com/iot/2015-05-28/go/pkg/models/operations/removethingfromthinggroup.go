package operations

type RemoveThingFromThingGroupHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type RemoveThingFromThingGroupRequestBody struct {
	ThingArn       *string `json:"thingArn,omitempty"`
	ThingGroupArn  *string `json:"thingGroupArn,omitempty"`
	ThingGroupName *string `json:"thingGroupName,omitempty"`
	ThingName      *string `json:"thingName,omitempty"`
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
