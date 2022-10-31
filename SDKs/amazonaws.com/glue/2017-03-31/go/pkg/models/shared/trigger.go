package shared

type Trigger struct {
	Actions                []Action                `json:"Actions,omitempty"`
	Description            *string                 `json:"Description,omitempty"`
	EventBatchingCondition *EventBatchingCondition `json:"EventBatchingCondition,omitempty"`
	ID                     *string                 `json:"Id,omitempty"`
	Name                   *string                 `json:"Name,omitempty"`
	Predicate              *Predicate              `json:"Predicate,omitempty"`
	Schedule               *string                 `json:"Schedule,omitempty"`
	State                  *TriggerStateEnum       `json:"State,omitempty"`
	Type                   *TriggerTypeEnum        `json:"Type,omitempty"`
	WorkflowName           *string                 `json:"WorkflowName,omitempty"`
}
