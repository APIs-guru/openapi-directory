package shared

type TriggerUpdate struct {
	Actions                []Action                `json:"Actions"`
	Description            *string                 `json:"Description"`
	EventBatchingCondition *EventBatchingCondition `json:"EventBatchingCondition"`
	Name                   *string                 `json:"Name"`
	Predicate              *Predicate              `json:"Predicate"`
	Schedule               *string                 `json:"Schedule"`
}
