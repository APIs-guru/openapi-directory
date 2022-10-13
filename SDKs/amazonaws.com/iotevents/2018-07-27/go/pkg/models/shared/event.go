package shared

type Event struct {
	Actions   []Action `json:"actions"`
	Condition *string  `json:"condition"`
	EventName string   `json:"eventName"`
}
