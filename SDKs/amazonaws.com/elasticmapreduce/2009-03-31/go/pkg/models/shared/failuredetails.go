package shared

type FailureDetails struct {
	LogFile *string `json:"LogFile,omitempty"`
	Message *string `json:"Message,omitempty"`
	Reason  *string `json:"Reason,omitempty"`
}
