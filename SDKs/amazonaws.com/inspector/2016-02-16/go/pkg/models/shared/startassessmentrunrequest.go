package shared

type StartAssessmentRunRequest struct {
	AssessmentRunName     *string `json:"assessmentRunName"`
	AssessmentTemplateArn string  `json:"assessmentTemplateArn"`
}
