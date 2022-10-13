package shared

type NotifyEmailType struct {
	HTMLBody *string `json:"HtmlBody"`
	Subject  string  `json:"Subject"`
	TextBody *string `json:"TextBody"`
}
