package shared

type PutPermissionRequest struct {
	Action       *string    `json:"Action"`
	Condition    *Condition `json:"Condition"`
	EventBusName *string    `json:"EventBusName"`
	Policy       *string    `json:"Policy"`
	Principal    *string    `json:"Principal"`
	StatementID  *string    `json:"StatementId"`
}
