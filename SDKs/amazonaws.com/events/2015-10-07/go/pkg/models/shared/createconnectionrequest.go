package shared

type CreateConnectionRequest struct {
	AuthParameters    CreateConnectionAuthRequestParameters `json:"AuthParameters"`
	AuthorizationType ConnectionAuthorizationTypeEnum       `json:"AuthorizationType"`
	Description       *string                               `json:"Description"`
	Name              string                                `json:"Name"`
}
