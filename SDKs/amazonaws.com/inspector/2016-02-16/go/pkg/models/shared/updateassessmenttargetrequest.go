package shared

type UpdateAssessmentTargetRequest struct {
	AssessmentTargetArn  string  `json:"assessmentTargetArn"`
	AssessmentTargetName string  `json:"assessmentTargetName"`
	ResourceGroupArn     *string `json:"resourceGroupArn"`
}
