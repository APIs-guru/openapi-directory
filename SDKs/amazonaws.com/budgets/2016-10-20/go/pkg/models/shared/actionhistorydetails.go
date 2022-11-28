package shared

// ActionHistoryDetails
//
//	The description of details of the event.
type ActionHistoryDetails struct {
	Action  Action `json:"Action"`
	Message string `json:"Message"`
}
