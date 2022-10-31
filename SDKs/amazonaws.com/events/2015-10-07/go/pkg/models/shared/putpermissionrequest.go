package shared

type PutPermissionRequest struct {
	Action       *string    `json:"Action,omitempty"`
	Condition    *Condition `json:"Condition,omitempty"`
	EventBusName *string    `json:"EventBusName,omitempty"`
	Policy       *string    `json:"Policy,omitempty"`
	Principal    *string    `json:"Principal,omitempty"`
	StatementID  *string    `json:"StatementId,omitempty"`
}
