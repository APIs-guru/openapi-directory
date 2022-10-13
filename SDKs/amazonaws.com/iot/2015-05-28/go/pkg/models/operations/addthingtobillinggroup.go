package operations

type AddThingToBillingGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type AddThingToBillingGroupRequestBody struct {
	BillingGroupArn  *string `json:"billingGroupArn"`
	BillingGroupName *string `json:"billingGroupName"`
	ThingArn         *string `json:"thingArn"`
	ThingName        *string `json:"thingName"`
}

type AddThingToBillingGroupRequest struct {
	Headers AddThingToBillingGroupHeaders
	Request AddThingToBillingGroupRequestBody `request:"mediaType=application/json"`
}

type AddThingToBillingGroupResponse struct {
	AddThingToBillingGroupResponse map[string]interface{}
	ContentType                    string
	InternalFailureException       *interface{}
	InvalidRequestException        *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
}
