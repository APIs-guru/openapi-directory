package shared

type Trigger struct {
	Actions                []Action                `json:"Actions"`
	Description            *string                 `json:"Description"`
	EventBatchingCondition *EventBatchingCondition `json:"EventBatchingCondition"`
	ID                     *string                 `json:"Id"`
	Name                   *string                 `json:"Name"`
	Predicate              *Predicate              `json:"Predicate"`
	Schedule               *string                 `json:"Schedule"`
	State                  *TriggerStateEnum       `json:"State"`
	Type                   *TriggerTypeEnum        `json:"Type"`
	WorkflowName           *string                 `json:"WorkflowName"`
}
