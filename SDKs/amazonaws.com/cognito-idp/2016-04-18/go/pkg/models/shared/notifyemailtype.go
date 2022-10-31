package shared



type NotifyEmailType struct {
    HTMLBody *string `json:"HtmlBody,omitempty"`
    Subject string `json:"Subject"`
    TextBody *string `json:"TextBody,omitempty"`
    
}

