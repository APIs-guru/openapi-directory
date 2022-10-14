package shared

type CreateConnectionRequest struct {
	AuthParameters    CreateConnectionAuthRequestParameters `json:"AuthParameters"`
	AuthorizationType ConnectionAuthorizationTypeEnum       `json:"AuthorizationType"`
	Description       *string                               `json:"Description,omitempty"`
	Name              string                                `json:"Name"`
}
