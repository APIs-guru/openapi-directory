package shared

type AssociateMacSecKeyResponse struct {
	ConnectionID *string     `json:"connectionId"`
	MacSecKeys   []MacSecKey `json:"macSecKeys"`
}
