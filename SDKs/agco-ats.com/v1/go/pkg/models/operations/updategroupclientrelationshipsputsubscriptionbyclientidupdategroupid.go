package operations

type UpdateGroupClientRelationshipsPutSubscriptionByClientIDUpdateGroupIDQueryParams struct {
	Active        bool   `queryParam:"style=form,explode=true,name=Active"`
	ClientID      string `queryParam:"style=form,explode=true,name=ClientID"`
	UpdateGroupID string `queryParam:"style=form,explode=true,name=UpdateGroupID"`
}

type UpdateGroupClientRelationshipsPutSubscriptionByClientIDUpdateGroupIDRequest struct {
	QueryParams UpdateGroupClientRelationshipsPutSubscriptionByClientIDUpdateGroupIDQueryParams
}

type UpdateGroupClientRelationshipsPutSubscriptionByClientIDUpdateGroupIDResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
