package shared

// GetSendQuotaResponse
// Represents your Amazon SES daily sending quota, maximum send rate, and the number of emails you have sent in the last 24 hours.
type GetSendQuotaResponse struct {
	Max24HourSend   *float64
	MaxSendRate     *float64
	SentLast24Hours *float64
}
