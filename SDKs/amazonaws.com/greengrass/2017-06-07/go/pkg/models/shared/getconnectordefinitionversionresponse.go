package shared

type GetConnectorDefinitionVersionResponse struct {
	Arn               *string                     `json:"Arn"`
	CreationTimestamp *string                     `json:"CreationTimestamp"`
	Definition        *ConnectorDefinitionVersion `json:"Definition"`
	ID                *string                     `json:"Id"`
	NextToken         *string                     `json:"NextToken"`
	Version           *string                     `json:"Version"`
}
