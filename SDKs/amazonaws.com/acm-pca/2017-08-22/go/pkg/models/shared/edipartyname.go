package shared

type EdiPartyName struct {
	NameAssigner *string `json:"NameAssigner"`
	PartyName    string  `json:"PartyName"`
}
