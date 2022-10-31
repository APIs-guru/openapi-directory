package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateGroupClientRelationshipsPutSubscriptionPathParams struct {
	RelationshipID string `pathParam:"style=simple,explode=false,name=RelationshipID"`
}

type UpdateGroupClientRelationshipsPutSubscriptionRequests struct {
	ApplicationXML                                   []byte                                                  `request:"mediaType=application/xml"`
	TextXML                                          []byte                                                  `request:"mediaType=text/xml"`
	UpdateSystemModelsUpdateGroupClientRelationship  *shared.UpdateSystemModelsUpdateGroupClientRelationship `request:"mediaType=application/json"`
	UpdateSystemModelsUpdateGroupClientRelationship1 *shared.UpdateSystemModelsUpdateGroupClientRelationship `request:"mediaType=application/x-www-form-urlencoded"`
	UpdateSystemModelsUpdateGroupClientRelationship2 *shared.UpdateSystemModelsUpdateGroupClientRelationship `request:"mediaType=text/json"`
}

type UpdateGroupClientRelationshipsPutSubscriptionRequest struct {
	PathParams UpdateGroupClientRelationshipsPutSubscriptionPathParams
	Request    UpdateGroupClientRelationshipsPutSubscriptionRequests
}

type UpdateGroupClientRelationshipsPutSubscriptionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
