package shared

type GetFunctionDefinitionVersionResponse struct {
	Arn               *string                    `json:"Arn"`
	CreationTimestamp *string                    `json:"CreationTimestamp"`
	Definition        *FunctionDefinitionVersion `json:"Definition"`
	ID                *string                    `json:"Id"`
	NextToken         *string                    `json:"NextToken"`
	Version           *string                    `json:"Version"`
}
