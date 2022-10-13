package shared

type ListReplaysRequest struct {
	EventSourceArn *string          `json:"EventSourceArn"`
	Limit          *int64           `json:"Limit"`
	NamePrefix     *string          `json:"NamePrefix"`
	NextToken      *string          `json:"NextToken"`
	State          *ReplayStateEnum `json:"State"`
}
