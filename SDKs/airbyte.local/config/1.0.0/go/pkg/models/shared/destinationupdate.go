package shared

type DestinationUpdate struct {
	ConnectionConfiguration interface{} `json:"connectionConfiguration"`
	DestinationID           string      `json:"destinationId"`
	Name                    string      `json:"name"`
}
