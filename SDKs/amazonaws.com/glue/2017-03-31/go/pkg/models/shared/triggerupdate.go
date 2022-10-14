package shared

type TriggerUpdate struct {
	Actions                []Action                `json:"Actions,omitempty"`
	Description            *string                 `json:"Description,omitempty"`
	EventBatchingCondition *EventBatchingCondition `json:"EventBatchingCondition,omitempty"`
	Name                   *string                 `json:"Name,omitempty"`
	Predicate              *Predicate              `json:"Predicate,omitempty"`
	Schedule               *string                 `json:"Schedule,omitempty"`
}
