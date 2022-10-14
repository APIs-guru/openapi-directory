package operations

type RemoveThingFromBillingGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type RemoveThingFromBillingGroupRequestBody struct {
	BillingGroupArn  *string `json:"billingGroupArn,omitempty"`
	BillingGroupName *string `json:"billingGroupName,omitempty"`
	ThingArn         *string `json:"thingArn,omitempty"`
	ThingName        *string `json:"thingName,omitempty"`
}

type RemoveThingFromBillingGroupRequest struct {
	Headers RemoveThingFromBillingGroupHeaders
	Request RemoveThingFromBillingGroupRequestBody `request:"mediaType=application/json"`
}

type RemoveThingFromBillingGroupResponse struct {
	ContentType                         string
	InternalFailureException            *interface{}
	InvalidRequestException             *interface{}
	RemoveThingFromBillingGroupResponse map[string]interface{}
	ResourceNotFoundException           *interface{}
	StatusCode                          int64
	ThrottlingException                 *interface{}
}
