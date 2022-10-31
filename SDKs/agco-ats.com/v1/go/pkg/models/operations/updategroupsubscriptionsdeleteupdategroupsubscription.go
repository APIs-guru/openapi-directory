package operations



type UpdateGroupSubscriptionsDeleteUpdateGroupSubscriptionPathParams struct {
    UpdateGroupSubscriptionID int32 `pathParam:"style=simple,explode=false,name=UpdateGroupSubscriptionID"`
    
}

type UpdateGroupSubscriptionsDeleteUpdateGroupSubscriptionRequest struct {
    PathParams UpdateGroupSubscriptionsDeleteUpdateGroupSubscriptionPathParams 
    
}

type UpdateGroupSubscriptionsDeleteUpdateGroupSubscriptionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

