package shared

type StopAssessmentRunRequest struct {
	AssessmentRunArn string          `json:"assessmentRunArn"`
	StopAction       *StopActionEnum `json:"stopAction"`
}
