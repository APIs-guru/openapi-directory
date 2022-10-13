package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateGroupClientRelationshipsPostSubscriptionRequests struct {
	ApplicationXML                                   []byte                                                  `request:"mediaType=application/xml"`
	TextXML                                          []byte                                                  `request:"mediaType=text/xml"`
	UpdateSystemModelsUpdateGroupClientRelationship  *shared.UpdateSystemModelsUpdateGroupClientRelationship `request:"mediaType=application/json"`
	UpdateSystemModelsUpdateGroupClientRelationship1 *shared.UpdateSystemModelsUpdateGroupClientRelationship `request:"mediaType=application/x-www-form-urlencoded"`
	UpdateSystemModelsUpdateGroupClientRelationship2 *shared.UpdateSystemModelsUpdateGroupClientRelationship `request:"mediaType=text/json"`
}

type UpdateGroupClientRelationshipsPostSubscriptionRequest struct {
	Request UpdateGroupClientRelationshipsPostSubscriptionRequests
}

type UpdateGroupClientRelationshipsPostSubscriptionResponse struct {
	APIModelsAPIError                                                      *shared.APIModelsAPIError
	Body                                                                   []byte
	ContentType                                                            string
	StatusCode                                                             int64
	UpdateGroupClientRelationshipsPostSubscription200ApplicationJSONString *string
	UpdateGroupClientRelationshipsPostSubscription200TextJSONString        *string
}
