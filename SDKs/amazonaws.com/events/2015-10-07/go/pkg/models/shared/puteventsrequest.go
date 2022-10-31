package shared

type PutEventsRequest struct {
	Entries []PutEventsRequestEntry `json:"Entries"`
}
