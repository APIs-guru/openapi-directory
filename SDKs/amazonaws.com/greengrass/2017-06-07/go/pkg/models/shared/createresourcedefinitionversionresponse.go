package shared

type CreateResourceDefinitionVersionResponse struct {
	Arn               *string `json:"Arn,omitempty"`
	CreationTimestamp *string `json:"CreationTimestamp,omitempty"`
	ID                *string `json:"Id,omitempty"`
	Version           *string `json:"Version,omitempty"`
}
