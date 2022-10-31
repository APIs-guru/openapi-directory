package operations

import (
"openapi/pkg/models/shared")

type UpdateGroupSubscriptionsPutUpdateGroupSubscriptionPathParams struct {
    UpdateGroupSubscriptionID int32 `pathParam:"style=simple,explode=false,name=UpdateGroupSubscriptionID"`
    
}

type UpdateGroupSubscriptionsPutUpdateGroupSubscriptionRequests struct {
    ApplicationXML []byte `request:"mediaType=application/xml"`
    TextXML []byte `request:"mediaType=text/xml"`
    UpdateSystemModelsUpdateGroupSubscription *shared.UpdateSystemModelsUpdateGroupSubscription `request:"mediaType=application/json"`
    UpdateSystemModelsUpdateGroupSubscription1 *shared.UpdateSystemModelsUpdateGroupSubscription `request:"mediaType=application/x-www-form-urlencoded"`
    UpdateSystemModelsUpdateGroupSubscription2 *shared.UpdateSystemModelsUpdateGroupSubscription `request:"mediaType=text/json"`
    
}

type UpdateGroupSubscriptionsPutUpdateGroupSubscriptionRequest struct {
    PathParams UpdateGroupSubscriptionsPutUpdateGroupSubscriptionPathParams 
    Request UpdateGroupSubscriptionsPutUpdateGroupSubscriptionRequests 
    
}

type UpdateGroupSubscriptionsPutUpdateGroupSubscriptionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

