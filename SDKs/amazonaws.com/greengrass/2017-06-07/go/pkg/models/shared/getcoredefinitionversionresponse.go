package shared

type GetCoreDefinitionVersionResponse struct {
	Arn               *string                `json:"Arn"`
	CreationTimestamp *string                `json:"CreationTimestamp"`
	Definition        *CoreDefinitionVersion `json:"Definition"`
	ID                *string                `json:"Id"`
	NextToken         *string                `json:"NextToken"`
	Version           *string                `json:"Version"`
}
