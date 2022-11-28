package shared

// GetAccountSendingEnabledResponse
// Represents a request to return the email sending status for your Amazon SES account in the current AWS Region.
type GetAccountSendingEnabledResponse struct {
	Enabled *bool
}
