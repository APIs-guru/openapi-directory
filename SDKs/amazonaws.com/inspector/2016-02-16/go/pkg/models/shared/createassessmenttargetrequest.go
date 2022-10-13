package shared

type CreateAssessmentTargetRequest struct {
	AssessmentTargetName string  `json:"assessmentTargetName"`
	ResourceGroupArn     *string `json:"resourceGroupArn"`
}
