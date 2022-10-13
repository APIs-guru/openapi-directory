package shared

type GetSubscriptionDefinitionVersionResponse struct {
	Arn               *string                        `json:"Arn"`
	CreationTimestamp *string                        `json:"CreationTimestamp"`
	Definition        *SubscriptionDefinitionVersion `json:"Definition"`
	ID                *string                        `json:"Id"`
	NextToken         *string                        `json:"NextToken"`
	Version           *string                        `json:"Version"`
}
