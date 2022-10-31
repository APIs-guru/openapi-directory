package operations

import (
"openapi/pkg/models/shared")

type PostAppsAppIDQueuesPathParams struct {
    AppID string `pathParam:"style=simple,explode=false,name=app_id"`
    
}

type PostAppsAppIDQueuesSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type PostAppsAppIDQueuesRequest struct {
    PathParams PostAppsAppIDQueuesPathParams 
    Request *shared.Queue `request:"mediaType=application/json"`
    Security PostAppsAppIDQueuesSecurity 
    
}

type PostAppsAppIDQueuesResponse struct {
    ContentType string 
    StatusCode int64 
    Error *shared.Error 
    QueueResponse *shared.QueueResponse 
    
}

