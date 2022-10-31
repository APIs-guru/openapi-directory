package shared

type GetConnectorDefinitionVersionResponse struct {
	Arn               *string                     `json:"Arn,omitempty"`
	CreationTimestamp *string                     `json:"CreationTimestamp,omitempty"`
	Definition        *ConnectorDefinitionVersion `json:"Definition,omitempty"`
	ID                *string                     `json:"Id,omitempty"`
	NextToken         *string                     `json:"NextToken,omitempty"`
	Version           *string                     `json:"Version,omitempty"`
}
