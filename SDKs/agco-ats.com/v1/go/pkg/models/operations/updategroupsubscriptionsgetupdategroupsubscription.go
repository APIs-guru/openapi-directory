package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateGroupSubscriptionsGetUpdateGroupSubscriptionPathParams struct {
	UpdateGroupSubscriptionID int32 `pathParam:"style=simple,explode=false,name=UpdateGroupSubscriptionID"`
}

type UpdateGroupSubscriptionsGetUpdateGroupSubscriptionRequest struct {
	PathParams UpdateGroupSubscriptionsGetUpdateGroupSubscriptionPathParams
}

type UpdateGroupSubscriptionsGetUpdateGroupSubscriptionResponse struct {
	APIModelsAPIError                         *shared.APIModelsAPIError
	Body                                      []byte
	ContentType                               string
	StatusCode                                int64
	UpdateSystemModelsUpdateGroupSubscription *shared.UpdateSystemModelsUpdateGroupSubscription
}
