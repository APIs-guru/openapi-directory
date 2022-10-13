package shared

type FailureDetails struct {
	LogFile *string `json:"LogFile"`
	Message *string `json:"Message"`
	Reason  *string `json:"Reason"`
}
