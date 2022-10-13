package shared

type CreateTriggerRequest struct {
	Actions                []Action                `json:"Actions"`
	Description            *string                 `json:"Description"`
	EventBatchingCondition *EventBatchingCondition `json:"EventBatchingCondition"`
	Name                   string                  `json:"Name"`
	Predicate              *Predicate              `json:"Predicate"`
	Schedule               *string                 `json:"Schedule"`
	StartOnCreation        *bool                   `json:"StartOnCreation"`
	Tags                   map[string]string       `json:"Tags"`
	Type                   TriggerTypeEnum         `json:"Type"`
	WorkflowName           *string                 `json:"WorkflowName"`
}
