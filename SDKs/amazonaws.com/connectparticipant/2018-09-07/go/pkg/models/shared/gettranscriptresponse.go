package shared

type GetTranscriptResponse struct {
	InitialContactID *string `json:"InitialContactId"`
	NextToken        *string `json:"NextToken"`
	Transcript       []Item  `json:"Transcript"`
}
