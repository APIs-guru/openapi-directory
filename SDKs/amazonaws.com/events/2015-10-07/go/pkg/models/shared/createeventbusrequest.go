package shared

type CreateEventBusRequest struct {
	EventSourceName *string `json:"EventSourceName"`
	Name            string  `json:"Name"`
	Tags            []Tag   `json:"Tags"`
}
