package shared

// EmailRecipients
// <p>Contains the information of one or more recipients who receive the emails.</p> <important> <p>You must <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/addusers.html">add the users that receive emails to your AWS SSO store</a>.</p> </important>
type EmailRecipients struct {
	To []RecipientDetail `json:"to,omitempty"`
}
