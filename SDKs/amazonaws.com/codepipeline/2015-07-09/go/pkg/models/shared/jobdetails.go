package shared

type JobDetails struct {
	AccountID *string  `json:"accountId"`
	Data      *JobData `json:"data"`
	ID        *string  `json:"id"`
}
