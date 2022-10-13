package shared

type GetResourceDefinitionVersionResponse struct {
	Arn               *string                    `json:"Arn"`
	CreationTimestamp *string                    `json:"CreationTimestamp"`
	Definition        *ResourceDefinitionVersion `json:"Definition"`
	ID                *string                    `json:"Id"`
	Version           *string                    `json:"Version"`
}
