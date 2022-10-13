package shared

type Notifications struct {
	Completed   *string `json:"Completed"`
	Error       *string `json:"Error"`
	Progressing *string `json:"Progressing"`
	Warning     *string `json:"Warning"`
}
