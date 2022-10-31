package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateGroupSubscriptionsPostUpdateGroupSubscriptionRequests struct {
	ApplicationXML                             []byte                                            `request:"mediaType=application/xml"`
	TextXML                                    []byte                                            `request:"mediaType=text/xml"`
	UpdateSystemModelsUpdateGroupSubscription  *shared.UpdateSystemModelsUpdateGroupSubscription `request:"mediaType=application/json"`
	UpdateSystemModelsUpdateGroupSubscription1 *shared.UpdateSystemModelsUpdateGroupSubscription `request:"mediaType=application/x-www-form-urlencoded"`
	UpdateSystemModelsUpdateGroupSubscription2 *shared.UpdateSystemModelsUpdateGroupSubscription `request:"mediaType=text/json"`
}

type UpdateGroupSubscriptionsPostUpdateGroupSubscriptionRequest struct {
	Request UpdateGroupSubscriptionsPostUpdateGroupSubscriptionRequests
}

type UpdateGroupSubscriptionsPostUpdateGroupSubscriptionResponse struct {
	APIModelsAPIError                                                                 *shared.APIModelsAPIError
	Body                                                                              []byte
	ContentType                                                                       string
	StatusCode                                                                        int64
	UpdateGroupSubscriptionsPostUpdateGroupSubscription200ApplicationJSONInt32Integer *int32
	UpdateGroupSubscriptionsPostUpdateGroupSubscription200TextJSONInt32Integer        *int32
}
