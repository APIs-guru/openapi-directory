package shared

type AssociateTargetsWithJobResponse struct {
	Description *string `json:"description"`
	JobArn      *string `json:"jobArn"`
	JobID       *string `json:"jobId"`
}
