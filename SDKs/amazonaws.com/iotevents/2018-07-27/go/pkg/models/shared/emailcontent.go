package shared

type EmailContent struct {
	AdditionalMessage *string `json:"additionalMessage"`
	Subject           *string `json:"subject"`
}
