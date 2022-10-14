package shared

type UpdateConnectionRequest struct {
	AuthParameters    *UpdateConnectionAuthRequestParameters `json:"AuthParameters,omitempty"`
	AuthorizationType *ConnectionAuthorizationTypeEnum       `json:"AuthorizationType,omitempty"`
	Description       *string                                `json:"Description,omitempty"`
	Name              string                                 `json:"Name"`
}
