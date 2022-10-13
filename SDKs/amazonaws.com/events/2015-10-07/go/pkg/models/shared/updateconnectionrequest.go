package shared

type UpdateConnectionRequest struct {
	AuthParameters    *UpdateConnectionAuthRequestParameters `json:"AuthParameters"`
	AuthorizationType *ConnectionAuthorizationTypeEnum       `json:"AuthorizationType"`
	Description       *string                                `json:"Description"`
	Name              string                                 `json:"Name"`
}
