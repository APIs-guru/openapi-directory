package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateGroupClientRelationshipsGetSubscriptionPathParams struct {
	RelationshipID string `pathParam:"style=simple,explode=false,name=RelationshipID"`
}

type UpdateGroupClientRelationshipsGetSubscriptionRequest struct {
	PathParams UpdateGroupClientRelationshipsGetSubscriptionPathParams
}

type UpdateGroupClientRelationshipsGetSubscriptionResponse struct {
	APIModelsAPIError                               *shared.APIModelsAPIError
	Body                                            []byte
	ContentType                                     string
	StatusCode                                      int64
	UpdateSystemModelsUpdateGroupClientRelationship *shared.UpdateSystemModelsUpdateGroupClientRelationship
}
