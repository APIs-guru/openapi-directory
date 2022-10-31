package operations



type AddThingToBillingGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type AddThingToBillingGroupRequestBody struct {
    BillingGroupArn *string `json:"billingGroupArn,omitempty"`
    BillingGroupName *string `json:"billingGroupName,omitempty"`
    ThingArn *string `json:"thingArn,omitempty"`
    ThingName *string `json:"thingName,omitempty"`
    
}

type AddThingToBillingGroupRequest struct {
    Headers AddThingToBillingGroupHeaders 
    Request AddThingToBillingGroupRequestBody `request:"mediaType=application/json"`
    
}

type AddThingToBillingGroupResponse struct {
    AddThingToBillingGroupResponse map[string]interface{} 
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

