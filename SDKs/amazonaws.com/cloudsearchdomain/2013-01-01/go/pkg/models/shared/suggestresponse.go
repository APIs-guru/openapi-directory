package shared

type SuggestResponse struct {
	Status  *SuggestStatus `json:"status"`
	Suggest *SuggestModel  `json:"suggest"`
}
